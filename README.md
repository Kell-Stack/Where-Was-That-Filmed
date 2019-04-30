# Where Was That Filmed?

## Table of Contents

- [Installation](#installation)
- [Implementation](#mplementation)
- [Usage](#usage)
- [Resources](#resources)


## Installation

Node -v is 4.6.1 and npm -v is 11.9.0
From the root
```
$ cd client
```
Then install node package manager.

```
npm install
```
Additionally, from the root
```
$ cd server
```
Then run nodemon
```
nodemon server
```



## Implementation

I used data from  ```https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am``` which provided me with a listing of filming locations of movies shot in San Francisco starting from 1924. The data was provided by and last updated on October 27, 2017 by the San Francisco Film Commission. 
*Note: This data was sanitized of season and episode data and null locations

I also used TMDB to gather information on each movie for the user.
- React
- PostgreSQL
- Reactstrap


## Usage

Where Was That Filmed? allows film and TV buffs the chance to locate where their favorite scenes were shot in beautiful San Francisco. Browse all the locations to create your own tour and tweet at us @WhereWasThatFilmed with the hashtag #WWTF to share your recreation of iconic cinematic moments.

## Resources

Thank you to the following authors' of the posts and videos that helped me create this

* React Apps with the Google Maps API and google-maps-react - @ngige_rachael
    * https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

* TMDB
    *https://www.themoviedb.org/