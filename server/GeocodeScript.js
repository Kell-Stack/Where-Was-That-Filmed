// /*1. Create new column in postgres database: latlong
// 2. Methods to create:
// 1. function generateLatLong()
//     - a. For each row in database, select location DONE
//     - b. Call google location API with location string DONE
//     - c. Receive returned object with lat/long coordinates DONE (see console)
//     - d. Put co-ordinates in new database column (“latlong”), for that row */
const axios = require('axios');
const {Pool} = require('pg')

var pool = new Pool({
    host: 'localhost',
    database: 'sffilms'
})

async function generateLatLong() {
    const client = await pool.connect();
    const locationQuery = await client.query('SELECT id, locations FROM media;');
    console.log(locationQuery)
    // if you want to reset bounds
    let sfNE = '37.835765,-122.351918';
    let sfSW = '37.709090,-122.523080';

    for (let i = 0; i < 15 ; i++) {

        let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
            params: {
                address: locationQuery.rows[i].locations,
                bounds: `${sfSW}|${sfNE}`,
                key: 'AIzaSyBQAbSfzpZH9Gd8EEDfwKhem_8LtaE_FXU',
            }
        })
        console.log(locationQuery.rows[i].locations)
        // console.log(result)
        var results = result.data.results

        const row = locationQuery.rows[i]

        if (results.length>1){
            results = [results[0]]
            // console.error('multiple results: sanitize data📝')
        }

        for (let data of results) {
            const lat = (data.geometry.location.lat)
            const lng = (data.geometry.location.lng)

            const id = row.id
            const values = [lat, lng, id]

                // test out of bounds
            const northernSF = 37.835765
            const southernSF = 37.709090
            const westernSF = -122.351918
            const easternSF = -122.523080

            let latOOB = parseFloat(lat)
            let lngOOB = parseFloat(lng)


            if (latOOB > northernSF || latOOB < southernSF || westernSF < lngOOB || lngOOB < easternSF) {

                console.error('location out of bounds, data needs to be more specific👀')
            }

            client.query('UPDATE media SET lat = $1, lng = $2 WHERE id = $3 RETURNING lat,lng', values).then(res => {
                    console.log(res.rows[0].lat,res.rows[0].lng)
                })
                .catch(e => console.error(e))
        }
        // console.log(result.data.results)
        // await client.release()
    }
}

generateLatLong()