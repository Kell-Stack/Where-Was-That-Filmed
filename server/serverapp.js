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

app.get('/AllTitles', async (req, res) => {
  const client = await pool.connect();
  var showAllTitles = await client.query('SELECT title FROM media2 ORDER BY title ASC;');
  console.log(showAllTitles)
  client.release()
  res.json(showAllTitles.rows);
});

app.get('/AllActors/', async (req, res) => {
  const client = await pool.connect();
  var showAllActors = await client.query('SELECT actor_1,actor_2,actor_3 FROM media2 ORDER BY actor_1,actor_2,actor_3 ASC;');
  client.release()
  res.json(showAllActors.rows);
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
      res.sendFile(path.join(__dirname, "../client/build", "index.html"))
    }