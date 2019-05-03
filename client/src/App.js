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

console.log(process.env.REACT_APP_TMDB_KEY)

export default App;
