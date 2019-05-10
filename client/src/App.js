import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import MapContainer from './MapContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllTitlesList from './AllTitlesList';
import AllActorsList from './AllActorsList';
// import {Container, Row, Col }from 'react-bootstrap'
const APIlatlng = '/LatLng'
const APItourbyactor = '/TourByActor/'
const APItourbytitle = '/TourByTitle/' // TODO: This doesn't exist yet


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

  loadLatLng(){

    // Determine which API call to make depending on whether we're getting
    // 1. all locations for all actors (default)
    // 2. all locations for a single title
    // 3. all locations for a single actor
    // We determine this based on the URL
    let apiCall = APIlatlng;
    const path = window.location.pathname;
    if (path.startsWith("/AllActors/")) {
      const actor = path.split('/')[2];
      apiCall = APItourbyactor + actor;
    }
    else if (path.startsWith("/AllTitles")) {
      apiCall = APItourbytitle + 'Big Eyes';
    }

    console.log("About to call:", apiCall)
    fetch(apiCall)
      .then(res => res.json())
      .then(result => this.setState({locations:result}))
      .catch(err => console.log('❌❌❌ something is wrong with getting your lat and lngs', err))
  }

  componentWillMount() {
    this.loadLatLng()
  }

  render(){
    return (
        <div className="Header">
          <Router>
            <Menu />

              <div className="App-Component-Map-Container">
                <MapContainer locations={this.state.locations}/>
              </div>

              <div className="App-Component-Titles-Route-Container">
                <Route path='/AllTitles' component={AllTitlesList}/>
              </div>

              <div className="App-Component-Actors-Route-Container">
                <Route path='/AllActors' component={AllActorsList}/>
              </div>

          </Router>
        </div>
    );
  }
}

// console.log(process.env.REACT_APP_TMDB_KEY)

export default App;
