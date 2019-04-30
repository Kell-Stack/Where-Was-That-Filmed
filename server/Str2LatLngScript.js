// /*1. Create new column in postgres database: latlong
// 2. Methods to create:
// 1. function generateLatLong()
//     - a. For each row in database, select location
//     - b. Call google location API with location string
//     - c. Receive returned object with lat/long coordinates
//     - d. Put co-ordinates in new database column (“latlong”), for that row */

const express = require('express');
const app = express();
app.use(express.json());

const {Pool} = require('pg')
var pool = new Pool({
    host: 'localhost',
    database: 'sffilms',
    table: 'media',
    column: 'media.location'
})

const PORT = process.env.PORT || 3008
app.listen(PORT, console.log(`Server is on port ${PORT}👾`))

client.query('SELECT locations FROM media;')

app.use(express.static('media'))


app.get('/locations', async (req, res) => {
    pool.conecct((err, client, done) => {
        const query = 'SELECT locations FROM media;';
        client.query(query, (error, result) => {
            done();
            if (error) {
                res.status(400).json({
                    error
                })
            }
            if (result.rows < '1') {
                res.status(404).send({
                    status: 'Failed ❌',
                    message: 'Info not found ❌',
                });
            } else {
                res.status(200).send({
                    status: 'Successful ✅',
                    message: 'Info retrieved ✅',
                    locations: result.rows
                });
            }
        });
    });
})

app.post('/locations', (req, res) => {
    const data = {
        location: req.body.locations
    }

    pool.connect((err, client, done) => {
        const query = 'INSERT INTO media (latlng) VALUES ($1) RETURNING *;';
        const values = [data.location];

        client.query(query, values, (error, result) => {
            done();
            if (error) {
                res.status(400).json({
                    error
                });
            }
            res.status(202).send({
                ststus: 'Successful',
                result: result.rows[0]
            });
        });
    });
});

function generateLatLong(lat, lng) {

}