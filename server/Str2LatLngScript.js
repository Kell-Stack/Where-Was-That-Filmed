// /*1. Create new column in postgres database: latlong
// 2. Methods to create:
// 1. function generateLatLong()
//     - a. For each row in database, select location
//     - b. Call google location API with location string
//     - c. Receive returned object with lat/long coordinates
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

    for (let i =0; i < 1; i++){

        let result = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
            params: {
            address: locationQuery.rows[i].locations,
            key: 'AIzaSyBQAbSfzpZH9Gd8EEDfwKhem_8LtaE_FXU'
            }
        })
        console.log(result.data.results[0].geometry)
        // await client.query('UPDATE media SET lat = ($1), lng $2 WHERE id = $3;', [])
    }
    client.release()
}

generateLatLong()



// let http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'json'});
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);