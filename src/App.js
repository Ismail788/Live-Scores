import React, { Component } from 'react';
import Form from './Components/form';
import Countries from './Components/country';
import Fixtures from './Components/fixtures';
import Scores from './Components/scores';
import CountryScores from './Components/country-scores';
import './App.css';
import {Route, NavLink, HashRouter} from 'react-router-do';


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
      <HashRouter>
   <div className = "main-container">
		<ul className="header">
		<li><NavLink exact to="/">Country</NavLink></li>
		<li><NavLink to="/scores">scores</NavLink></li>
		<li><NavLink to="/fixtures">fixtures</NavLink></li>
		</ul>
			 <h1>Football Info</h1>
   <div className="content">
			<Route exact path="/" component={Countries}/>
			<Route path="/Scores" component={Scores}/>
			<Route path="/Fixtures" component={Fixtures}/>

		</div>
     
      <div class='Container'>
      <section>
      <Form />
        <Countries onCountrySelect={this.onCountrySelect} />
        {this.renderScores()}
        <Fixtures />
      </section>
     
      </div>
      </div>
      </HashRouter>
    );
   
  }
}

export default App;
