# Where Was That Filmed?

![](./client/src/WWTF.GIF)

## Table of Contents

- [Installation](#installation)
- [Implementation](#mplementation)
- [Usage](#usage)
- [Resources](#resources)


## Installation

Node -v is 4.6.1 and npm -v is 11.9.0
From the root, head into the client folder
```
$ cd client
```
Then install node package manager.

```
$ npm install
```
Additionally, from the root head into the server folder
```
$ cd server
```
Then run nodemon
```
$ nodemon server
```


To run db, run postgresql and paste the contents of
`
server/commands.sql
`
to create table.


Then in another shell, run script to convert location strings from SF.gov to lat and lng from Geocode

```
$ cd server
```

```
$ node GeocodeScript.js
```




## Implementation

I used data from  ```https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am``` which provided me with a listing of filming locations of movies and tv series shot in San Francisco starting from 1924. The data was provided by and last updated on October 27, 2017 by the San Francisco Film Commission.
*Note: This data was sanitized of tv shows' season and episode information as well as locations that were returned from Geocode as null or out of SF bounds

- React
- PostgreSQL
- Google Map's Javascript API
- Geocode
- DataSF API


## Usage

Where Was That Filmed? allows film and TV buffs the chance to locate where their favorite scenes were shot in beautiful San Francisco. Browse all the locations and tweet us or tag us in your ig photos at @WhereWasThatFilmed with the hashtag #WWTF to share your recreation of iconic cinematic moments!

## Future Features

I'd like to add the following to this project in the future:
* Use TMDB to gather and display more information about each title and actor
* Add Google directions capabilities
* Partner with SF Film Commision to improve data
* Add "email tour" capabilities
* Use the "fun_fact" column provided by SF.gov to send text messages with Twilio's API

Even further on:
* Add a section for instagram photos that were tagged with #WWTF
* Open the scope outside of SF to include other major cities

## Resources

Thank you to the following authors' of the posts and videos that helped me create this

* React Apps with the Google Maps API and google-maps-react - @ngige_rachael
    * https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

* React Firebase Authentication with Google Facebook Twitter Github Email
    *https://www.youtube.com/watch?v=zq0TuNqV0Ew

* TMDB
    * https://www.themoviedb.org/