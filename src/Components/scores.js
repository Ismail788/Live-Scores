import React, { Component } from 'react';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';


class Scores extends Component {
  constructor(){
    super();
    this.state={
      scores: [],
      isloaded: false,
    }
  }
  componentDidMount(){
     fetch(`http://livescore-api.com/api-client/scores/live.json?key=${Demo_key}&secret=${Demo_secret}`)
     .then((response)=>response.json())
     .then((json)=>
        {
       this.setState({
         isloaded:true,
         scores:json,
       })
     })
  }
render() {
  let  {isloaded, scores} = this.state;
  if(!isloaded){
    return<div>loading...</div>
  }else {
    return (
      <div calss='Score'>
      <h1>All Scores</h1>
      <ul>
      {scores.data.match.map(match=>(
        <li key={match.id}>
        name:{match.name}

        </li>
      ))};

    </ul>
 </div>

 );
}

  }

  }
export default Scores;
