import React, { Component } from 'react';
import Form from './Components/form';
import Countries from './Components/country';
import Fixtures from './Components/fixtures';
import Scores from './Components/scores';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';


class App extends Component {
  constructor(){
    super();
    this.state={
      countries: [],
      isloaded: false,
    }
  }
  componentDidMount(){
     fetch(`http://livescore-api.com/api-client/countries/list.json?key=${Demo_key}&secret=${Demo_secret}`)
     .then((response)=>response.json())
     .then((json)=>
        {
       this.setState({
         isloaded:true,
         countries:json,
       })
     })
  }
render() {
  let  {isloaded, countries} = this.state;
  if(!isloaded){
    return<div>loading...</div>
  }else {
    return (
      <div calss='App'>
      <ul>
      {countries.data.country.map(country=>(
        <li key={country.id}>
        name:{country.name}

        </li>
      ))};

    </ul>
    <Form  form={this.state.form} />
    <Countries  Countries = {this.state.countries}/>
    <Scores  Scores = {this.state.scores} />
    <Fixtures  fixtures = {this.state.fixtures}/>
 </div>

 );
}

  }

  }
export default App;
