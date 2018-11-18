import React, { Component } from 'react';
import Form from './Components/form';
import Countries from './Components/country';
import Fixtures from './Components/fixtures';
import Scores from './Components/scores';
import CountryScores from './Components/country-scores';
import './App.css';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';

class App extends Component {
  constructor() {
    super();

    this.state = {
      countryId: null
    }
  }

  onCountrySelect = e => {
    e.preventDefault();
    const countrySelector = e.target;
    const countryId = countrySelector.value;
    const countryName = countrySelector[countrySelector.selectedIndex].text;

    fetch(`http://livescore-api.com/api-client/scores/live.json?key=${Demo_key}&secret=${Demo_secret}&country=${countryId}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          this.setState({
            countryId,
            countryName,
            countryLiveScores: json.data.match
          })
        } else {
          this.setState({
            countryLiveScores: [],
            countryId: null,
            countryName: null
         
          })
        }
      })
  }

  renderScores = () => {
    if (this.state.countryId) {
      return <CountryScores countryLiveScores={this.state.countryLiveScores} countryId={this.state.countryId} countryName={this.state.countryName} />
    } else {
      return <Scores />
    }
  }

  render() {
    return (
      <div calss='App'>
        <Form />
        <Countries onCountrySelect={this.onCountrySelect} />
        {this.renderScores()}
        <Fixtures />
      </div>
    );
  }
}

export default App;
