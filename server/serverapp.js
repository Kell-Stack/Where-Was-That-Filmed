const express = require('express');
const app = express()
app.use(express.json());
// var soda = require('soda-js');

const PORT = process.env.PORT || 3009
app.listen(PORT, console.log(`Server is on port ${PORT}👾`))


app.use(express.static('../data'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
      res.sendFile(path.join(__dirname, "../client/build", "index.html"))
    }