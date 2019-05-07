// /*1. Create new column in postgres database: latlong
// 2. Methods to create:
// 1. function generateLatLong()
//     - a. For each row in database, select location DONE
//     - b. Call google location API with location string DONE
//     - c. Receive returned object with lat/long coordinates DONE (see console)
//     - d. Put co-ordinates in new database column (“latlong”), for that row */

//      - e. write queue algo that will loop through batched of 100
//      - f. if result come back in loop then export into JSON file as "data is unspecific, geocode determined out of bounds"
//      - g. if still out of bounds loop over the value
const axios = require('axios');
const {Pool} = require('pg')

//db connection
var pool = new Pool({
    host: 'localhost',
    database: 'sffilms'
})
    //sends query to the db
async function generateLatLong() {
    const client = await pool.connect();
    const locationQuery = await client.query('SELECT id, locations FROM media;');

        // 💅 pushed into this empty array
            //OOBLocs will eventually look like this = [
                    //                                    {
                    //                                     id: id,
                    //                                     location: location
                    //                                    },
                    //                                    {
                    //                                     id: id,
                    //                                     location: location
                    //                                    },
                    //                                    {
                    //                                     id: id,
                    //                                     location: location
                    //                                    }
        //                                             ]
    var outOfBoundsLocations = []

    var outOfBoundsCount = 0

    //console.log("hiii",locationQuery)

        // if you want to reset bounds
    let sfNE = '37.835765,-122.351918';
    let sfSW = '37.709090,-122.523080';

        ///send query to google 🗺
    async function getLatLongFromGoogleGeocodeAPI(id, location) {
            //attaching and id to each row in the query
        const row = locationQuery.rows[id]
            //for each loop, will request:
                //each row of locaitons column into the address field,
                //set the bounds of SF,
                //and the apps restricted key
            //in the url...../json?address=.....&bounds=.....&API_KEY
        let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: location,
                bounds: `${sfSW}|${sfNE}`,
                key: 'AIzaSyBQAbSfzpZH9Gd8EEDfwKhem_8LtaE_FXU',
            }
        })
        // console.log(result)
        // console.log(locationQuery.rows[i].locations)
        //console.log("hi!",result)
        // if (results.length>1){
        //         results = [results[0]]
        //         // console.error('multiple results: sanitize data📝')
        //     }

        var results = result.data.results




            // ⛑test for first loop if the returned lat and lng are in bounds of sf
        for (let data of results) {
                //in the response object from google, grabs lat and lng values from geometry key
            const lat = (data.geometry.location.lat)
            const lng = (data.geometry.location.lng)

            const rowID = row.id
            const values = [lat, lng, rowID]

            console.log(lat,lng)


                // test out of bounds
            const northernSF = 37.835765
            const southernSF = 37.709090
            const westernSF = -122.351918
            const easternSF = -122.523080

            let latOOB = parseFloat(lat)
            let lngOOB = parseFloat(lng)

                //for the first loop around if the results returned a lat and lng thats OOB, a console message will appear
            if (latOOB > northernSF || latOOB < southernSF || westernSF < lngOOB || lngOOB < easternSF) {
                console.error('👀 location out of bounds, data needs to be more specific👀 ', location)
                // console.log(results[0])

                    //if the result came back as OOB, grab that results id and location string from db and push it into OOBLocations from uptop 💅
                if (outOfBoundsLocations.indexOf({id: id, location: location}) < 0) {
                    console.log("loc name: ", location)
                    outOfBoundsLocations.push({id: id, location: location})
                    outOfBoundsCount += 1

                        // if after 🗺 this will return lat and long as null and is just going to be skipped over
                } else {
                    console.log("💄 Still out of bounds!!!", location)
                }
                continue
            }
                //returns first round into lat lng, then gets ready to use 💅 this with 🧠 function
            return values
        } //end for in loop

    }

        //if ⛑ didn't happen then it's going to take results and enter lat and lng from geocode and put it into the database 📥
    async function getAllLatLongs() {
        // locationQuery.rowCount

        for (let i = 0; i < 963 ; i++) {
            var locationFromRow = locationQuery.rows[i].locations
            console.log("Location string: ",locationFromRow)
            let latLongValues = await getLatLongFromGoogleGeocodeAPI(i, locationFromRow)
            console.log("returned lat & lng 📍", latLongValues)
            updateLatLongInDatabase(latLongValues)
        }
    }

    getAllLatLongs().then(result => {
        console.log("💋 Invalid location count is: ", outOfBoundsLocations.length, outOfBoundsLocations)

        //🧠 for each OOB result we're going to add SF to the media.location string and run it through 🗺 again - 16 total
        outOfBoundsLocations.forEach((locationData, i, a) => {
            locationData.location = locationData.location.concat(', ', 'San Francisco')
            getLatLongFromGoogleGeocodeAPI(locationData.id, locationData.location).then (result => {
                updateLatLongInDatabase(result)
                console.log("OOB + \', San Francisco\' result", result)
            })
        })
    })

    //📥
    function updateLatLongInDatabase(result) {
        // Otherwise updates lat long
        client.query('UPDATE media SET lat = $1, lng = $2 WHERE id = $3 RETURNING lat,lng', result).then(res => {
            //console.log(res.rows[0].lat,res.rows[0].lng)
        })
        .catch(e => console.error("wahh!",e))
    }

}

generateLatLong()