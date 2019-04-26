import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Homepage from './Homepage.js'
// import { Button } from 'react-bootstrap';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
