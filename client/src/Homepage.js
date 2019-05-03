import MapContainer from './MapContainer.js'
import React, { Component } from 'react';
import Menu from './Menu.js'
import ReactRoutes from './ReactRoutes';

import './App.css';


class Homepage extends Component {
    render(){
      return (
        <div className="HP">
            <Menu />
            <MapContainer />
            <ReactRoutes />

        </div>
      );
    }
  }

export default Homepage;