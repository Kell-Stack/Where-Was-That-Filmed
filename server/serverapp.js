const express = require('express');
const app = express()
app.use(express.json());

const {Pool} = require('pg')
var pool = new Pool({
  host: 'localhost',
  database: 'sffilms'
})

const PORT = process.env.PORT || 3009
app.listen(PORT, console.log(`Server is on port ${PORT}👾`))


app.use(express.static('data'))

app.get('/', async (req, res) => {
  const client = await pool.connect();
  var showAll = await client.query('SELECT * FROM media ORDER BY id ASC;');
  console.log(showAll)
  client.release()
  res.json(showAll.rows);
});

app.get('/AllTitles', async (req, res) => {
  const client = await pool.connect();
  var showAllTitles = await client.query('SELECT title FROM media ORDER BY title ASC;');
  console.log(showAllTitles)
  client.release()
  res.json(showAllTitles.rows);
});

app.get('/AllActors', async (req, res) => {
  const client = await pool.connect();
  var showAllActors = await client.query('SELECT id, title, actor_1,actor_2,actor_3 FROM media ORDER BY actor_1,actor_2,actor_3 ASC;');
  client.release()
  res.json(showAllActors.rows);
});

app.get('/TourByTitle', async (req, res) => {
  const client = await pool.connect();
  var showTourByTitle = await client.query('SELECT * FROM media WHERE title = ($1);');
  client.release()
  res.json(showTourByTitle.rows);
});

// for markers
app.get('/LatLng', async (req, res) => {
  const client = await pool.connect();
  var showLatLng = await client.query('SELECT id, title, lat, lng FROM media ORDER BY title ASC;');
  client.release()
  res.json(showLatLng.rows);
});

app.get('/hello', async (req, res) => {
  res.json({Hello:"WORLD"});
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
      res.sendFile(path.join(__dirname, "../client/build", "index.html"))
    }
