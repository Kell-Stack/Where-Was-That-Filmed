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

var pool = new Pool({
    host: 'localhost',
    database: 'sffilms'
})

async function generateLatLong() {
    const client = await pool.connect();
    const locationQuery = await client.query('SELECT id, locations FROM media;');
    var outOfBoundsLocations = []
    var outOfBoundsCount = 0

    //console.log("hiii",locationQuery)
    // if you want to reset bounds
    let sfNE = '37.835765,-122.351918';
    let sfSW = '37.709090,-122.523080';

    async function getLatLongFromAPI(id, location) {
        const row = locationQuery.rows[id]

        let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: location,
                bounds: `${sfSW}|${sfNE}`,
                key: 'AIzaSyBjamtNScJzV67YI6RW_kOzzTgsV-EdjAM',
            }
        })
        //console.log(locationQuery.rows[i].locations)
        //  console.log("hi!",result)
        var results = result.data.results

        if (results.length>1){
            results = [results[0]]
            // console.error('multiple results: sanitize data📝')
        }

        for (let data of results) {
            const lat = (data.geometry.location.lat)
            const lng = (data.geometry.location.lng)

            const rowID = row.id
            const values = [lat, lng, rowID]

                // test out of bounds
            const northernSF = 37.835765
            const southernSF = 37.709090
            const westernSF = -122.351918
            const easternSF = -122.523080

            let latOOB = parseFloat(lat)
            let lngOOB = parseFloat(lng)

            if (latOOB > northernSF || latOOB < southernSF || westernSF < lngOOB || lngOOB < easternSF) {
                console.error('location out of bounds, data needs to be more specific👀', location)
                //console.log(results[0])

                if (outOfBoundsLocations.indexOf({id: id, location: location}) < 0) {
                    //console.log("ttttt", location)
                    outOfBoundsLocations.push({id: id, location: location})
                    outOfBoundsCount += 1
                } else {
                    console.log("💄 Still out of bounds!!!", location)
                }
                return
            }

            return values
        }
    }

    async function getAllLatLongs() {
        // locationQuery.rowCount
        for (let i = 101; i < 200 ; i++) {
            var locationFromRow = locationQuery.rows[i].locations
            await getLatLongFromAPI(i, locationFromRow)
            // updateLatLongInDatabase(latLongValues)
        }
    }

    getAllLatLongs().then(result => {
        console.log("💋 Invalid location count is: ", outOfBoundsLocations.length, outOfBoundsLocations)

        outOfBoundsLocations.forEach((locationData, i, a) => {
            locationData.location = locationData.location.concat(', ', 'San Francisco')
            getLatLongFromAPI(locationData.id, locationData.location).then (result => {
                //updateLatLongInDatabase(latLongValues)
                console.log("result!! 👏🏽", result)
            })
        })
    })

    function updateLatLongInDatabase(latLongValues) {
        // Otherwise updates lat long
        client.query('UPDATE media SET lat = $1, lng = $2 WHERE id = $3 RETURNING lat,lng', latLongValues).then(res => {
            //console.log(res.rows[0].lat,res.rows[0].lng)
        })
        .catch(e => console.error("wahh!",e))
    }

}

generateLatLong()