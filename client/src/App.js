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
      locations: {}
    }
  }

  loadLatLng(){
    console.log("About to call:", APIlatlng)
    fetch(APIlatlng)
      .then(res => res.text()
      .then(result => console.log(result)))
      .catch(err => console.log('❌❌❌', err))
  }

  componentWillMount() {
    this.loadLatLng()
}

  // componentDidMount() {
  //   fetch(APIlatlng)
  //   .then(resp => {
  //     if (!resp.ok) {
  //       if (resp.status >= 400 && resp.status < 500) {
  //         return resp.json().then(data => {
  //           let err = {
  //             errorMessage: data.message
  //           };
  //           throw err;
  //         });
  //       } else {
  //         let err = {
  //           errorrMessage: "Error FETCHING and parsing data from postgres db😳"
  //         };
  //         throw err;
  //       }
  //     }
  //   })
  // }

  render(){
    return (
      <div className="bg-dark">
        <div className="App">
          <Router>
            <Menu />
            <div className="App Component Map Container">
              <MapContainer />
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
