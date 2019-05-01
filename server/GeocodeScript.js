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
    let sfNE = '37.835765,-122.351918'
    let sfSW = '37.709090,-122.523080'
    // let resultBounds = new google.maps.LatLngBounds(

    //     results[0].geometry.viewport.getSouthWest(),
    //     results[0].geometry.viewport.getNorthEast()
    // );
    console.log(locationQuery)
    for (let i = 0; i < 5; i++) {

        let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?bounds=${sfNE}|${sfSW}`, {
            // https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&bounds=34.172684,-118.604794|34.236144,-118.500938&key=YOUR_API_KEY
                params: {
                    address: locationQuery.rows[i].locations,
                    key: 'AIzaSyBQAbSfzpZH9Gd8EEDfwKhem_8LtaE_FXU',

                }

            })

            // .catch(function (error) {
            //     if (error.response) {
            //         console.log(error.response.data);
            //         console.log(error.response.status);
            //         console.log(error.response.headers);
            //     } else if (error.request) {
            //         console.log(error.request);
            //     } else {
            //         console.log('Error', error.message);
            //     }
            //     console.log(error.config);
            // })

        // client.query('INSERT INTO media (lat, lng, id) VALUES ($1, $2, $3)').then(data => {
        //     console.log(data);})
            const results = result.data.results

            const row = locationQuery.rows[i]

            for (let data of results ) {
                const lat = (data.geometry.location.lat)
                const lng = (data.geometry.location.lng)

                const id = row.id
                const values = [lat, lng, id]
                // console.log(lat)
                // console.log(lng)
                // console.log(id)
                client.query('UPDATE media SET lat = $1, lng = $2 WHERE id = $3 RETURNING lat,lng', values).then(res => {
                    console.log(res.rows[0])
                })
                .catch(e => console.error(e))
            }
            // console.log(result.data.results)
    }
    await client.release()

    // client.query('INSERT INTO media (lat, lng, id) VALUES ($1, $2, $3)').then(data => {
    //     console.log(data);
    // })


    // const importQueryLng = await client.query('UPDATE media SET lng = $1 WHERE id = $2 RETURNING lng;');

    // for (let i = 0; i < 1; i++) {

    //     let importData = await axios.post('/sffilms', {
    //             lat: importQueryLat.locations.lat,
    //             lng: importQueryLng.locations.lng,
            // })
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // })
        // client.release()

    //     client.query
    // }
}

generateLatLong()