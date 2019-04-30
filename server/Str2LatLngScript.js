// /*1. Create new column in postgres database: latlong
// 2. Methods to create:
// 1. function generateLatLong()
//     - a. For each row in database, select location
//     - b. Call google location API with location string
//     - c. Receive returned object with lat/long coordinates
//     - d. Put co-ordinates in new database column (“latlong”), for that row */

const express = require('express');
const app = express()
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

app.get('/All', async (req, res) => {)

function generateLatLong (lat,lng) {

}

