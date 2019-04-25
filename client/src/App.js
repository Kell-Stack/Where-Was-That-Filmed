import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import AllTitlesList from './AllTitlesList.js'
import Homepage from './Homepage.js'
// import { Button } from 'react-bootstrap';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <AllTitlesList />
        <Homepage />
      </div>
    );
  }
}

export default App;
