import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import MapContainer from './MapContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllTitlesList from './AllTitlesList';
import AllActorsList from './AllActorsList';
// import {Container, Row, Col }from 'react-bootstrap'
const APIlatlng = '/LatLng'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

  loadLatLng(){
    console.log("About to call:", APIlatlng)
    fetch(APIlatlng)
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
                <AllActorsList />
              </div>

          </Router>
        </div>
    );
  }
}

// console.log(process.env.REACT_APP_TMDB_KEY)

export default App;
