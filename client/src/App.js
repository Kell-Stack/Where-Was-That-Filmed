import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import MapContainer from './MapContainer'
// import ReactRoutes from './ReactRoutes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllTitlesList from './AllTitlesList';
import AllActorsList from './AllActorsList';
const APIlatlng = 'http://localhost:3009/LatLng'
// import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  //   this.handleChange = this.handleChange.bind(this)
    this.state = {
      locations: []
    }
  }

  loadLatLng(){
    console.log("About to call:", APIlatlng)
    fetch(APIlatlng)
      .then(res => res.json())
      .then(result => this.setState({locations:result}))
      .catch(err => console.log('❌❌❌', err))
  }

  // loadLatLng(){
  //   console.log("About to call:", APIlatlng)
  //   fetch(APIlatlng)
  //     .then(res => res.text()
  //     .then(() => {
  //       const locations = this.state.locations.map((latlngval, idx) => {
  //         return <Marker key={idx} position={latlngval} onClick={this.onMarkerClick} name={'Example📍'} />
  //     })})
  //     .catch(err => console.log('❌❌❌', err))
  // }

  componentWillMount() {
    this.loadLatLng()
  }




  render(){
    return (
      <div className="bg-dark">
        <div className="App">
          <Router>
            <Menu />
            <div className="App Component Map Container">
              <MapContainer locations={this.state.locations}/>
                <Route path='/AllTitles' component={AllTitlesList}/>
                <Route path='/AllActors' component={AllActorsList}/>
            </div>
          </Router>

        </div>
      </div>
    );
  }
}

// console.log(process.env.REACT_APP_TMDB_KEY)

export default App;
