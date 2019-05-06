import React, { Component } from 'react';
import './App.css';
import Menu from './Menu.js'
import MapContainer from './MapContainer'
// import ReactRoutes from './ReactRoutes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AllTitlesList from './AllTitlesList';
import AllActorsList from './AllActorsList';


// import { Button } from 'react-bootstrap';


class App extends Component {


  render(){
    return (
      <div className="bg-dark">
        <div className="App">
          <Router>
            <Menu />
            <MapContainer />
                <div>
                    <Route path='/AllTitles' component={AllTitlesList}/>
                    <Route path='/AllActors' component={AllActorsList}/>
                </div>
          </Router>
        </div>
      </div>
    );
  }
}

console.log(process.env.REACT_APP_TMDB_KEY)

export default App;
