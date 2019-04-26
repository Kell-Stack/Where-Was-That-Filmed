import MapContainer from './MapContainer.js'
import React, { Component } from 'react';
import Menu from './Menu.js'

import './App.css';


class Homepage extends Component {
    render(){
      return (
        <div className="App">
            <Menu />
            <MapContainer />
        </div>
      );
    }
  }

export default Homepage;