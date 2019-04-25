import MapContainer from './MapContainer.js'
import React, { Component } from 'react';
import './App.css';

class Homepage extends Component {
    render(){
      return (
        <div className="App">
          <MapContainer />
        </div>
      );
    }
  }

export default Homepage;