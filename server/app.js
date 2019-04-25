const express = require('express');
const app = express()
app.use(express.json());
// var soda = require('soda-js');

const PORT = process.env.PORT || 3009
app.listen(PORT, console.log(`Server is on port ${PORT}👾`))


app.use(express.static('../data'))

// var sodaOpts = {
//   "url" : "https://data.sfgov.org/resource/wwmu-gmzc.json"
//   "apiToken" : "Rxq5s4mZ8YvaciF6bkihiPzcx"
// }


// consumer.query()
//   .withDataset('wwmu-gmzc')
//   .limit(5000)
//   .where()
//   .order()
//   .getRows()
//     .on('success', function(rows) { console.log(rows); })
//     .on('error', function(error) { console.error(error); });

// $.ajax({
//   url: "https://data.sfgov.org/resource/wwmu-gmzc.json",
//   type: "GET",
//   data: {
//     "$limit" : 5000,
//     "$$app_token" : "Rxq5s4mZ8YvaciF6bkihiPzcx"
//   }
// }).done(function(data) {
// alert("Retrieved " + data.length + " records from the dataset!");
// console.log(data);
// });



if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
      res.sendFile(path.join(__dirname, "../client/build", "index.html"))
    }