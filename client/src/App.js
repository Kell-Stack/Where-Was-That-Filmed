import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage.js'
// import { Button } from 'react-bootstrap';

class App extends Component {
  render(){
    return (
      <div className="bg-dark">
        <Homepage />
      </div>
    );
  }
}

export default App;
