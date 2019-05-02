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
    // if you want to reset bounds
    // let locDate =
    let sfNE = '37.835765,-122.351918';
    let sfSW = '37.709090,-122.523080';
    console.log(locationQuery)

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
        const results = result.data.results

        if (results.length>1 || ){
            console.log(results)
        }

        const row = locationQuery.rows[i]

        for (let data of results) {
            const lat = (data.geometry.location.lat)
            const lng = (data.geometry.location.lng)

            const id = row.id
            const values = [lat, lng, id]

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