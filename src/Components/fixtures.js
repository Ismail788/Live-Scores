import React, { Component } from 'react';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';

class Fixtures extends Component{
  constructor(){
     super();
    this.state= {
      fixtures:[],
      isLoaded: false,
    }
  }

  componentDidMount(){
     fetch(`http://livescore-api.com/api-client/fixtures/matches.json?key=${Demo_key}&secret=${Demo_secret}`)
     .then((response)=>response.json())
     .then((json)=>
        {
       this.setState({
        fixtures:json,
       isloaded:true,
       })
     })
  }
  render(){
    let  {isloaded, fixtures} = this.state;
    if(!isloaded){
      return<div>loading...</div>
    }else {
      return (
        <div calss='App'>
        <ul>
        {fixtures.data.fixtures.map(fixtures=>(
          <li key={fixtures.id}>
          time:{fixtures.time}

          </li>
        ))};
      </ul>
   </div>

   );
  }

    }

    }
  export default Fixtures;
