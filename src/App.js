import React, { Component } from 'react';
import Countries from './Components/country';
import Fixtures from './Components/fixtures';
import Scores from './Components/scores';
import CountryScores from './Components/country-scores';
import './App.css';
import {Route, NavLink, HashRouter} from 'react-router-dom';


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
      return <CountryScores 
      countryLiveScores={this.state.countryLiveScores} 
      countryId={this.state.countryId} 
      countryName={this.state.countryName} />
    } else {
      return 
    }
  }

  render() {
    return (
    <HashRouter>
     <div className='main-container'>
    
     <h1>Live Football Web-page</h1>
     <div className = 'container'>
  <ul className="header">
		<li><NavLink exact to="/">Country</NavLink></li>
		<li><NavLink to="/CountryScores">CountryScores</NavLink></li>
		<li><NavLink to="/Fixtures">fixtures</NavLink></li>
    <li><NavLink to="/Scores">Scores</NavLink></li>
	</ul>
	  <div className="content">
		 <Route exact path="/" component={Countries}/>
		 <Route path="/CountryScores" component={CountryScores}/>
		 <Route path="/Fixtures" component={Fixtures}/>
     <Route path="/Scores" component={Scores}/>
	  </div>
    <section>
        <Countries onCountrySelect={this.onCountrySelect} />
        {this.renderScores()}
    </section>
      </div>
      </div>
   </HashRouter>
      );
    }
}

export default App;
