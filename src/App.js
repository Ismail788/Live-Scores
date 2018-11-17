import React, { Component } from 'react';
import Form from './Components/form';
import Countries from './Components/country';
import Fixtures from './Components/fixtures';
import Scores from './Components/scores';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div calss='App'>
        <Form />
        <Countries />
        <Scores />
        <Fixtures />
      </div>
    );
  }
}

export default App;
