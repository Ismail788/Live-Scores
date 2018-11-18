import React, { Component } from 'react';
import myfetch from '../util/fetch';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';


class Scores extends Component {
  constructor() {
    super();
    this.state = {
      scores: [],
      isloaded: false,
      success: true,
    }
  }

  componentDidMount() {
    //fetch(`http://livescore-api.com/api-client/scores/live.json?key=${Demo_key}&secret=${Demo_secret}`)
    myfetch(`http://livescore-api.com/api-client/scores/live.json?bla=2`)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          this.setState({
            isloaded: true,
            scores: json,

            success: true
          })
        } else {
          this.setState({
            isloaded: true,
            success: false
          })
        }
      })
  }

  render() {
    let { isloaded, success, scores } = this.state;

    if (!isloaded) {
      return <div>loading...</div>
    }

    if (!success) {
      return <div>error while fetching scores</div>
    }

    return (
      <div className='Score'>
        <h1>All Scores</h1>
        <ul>
          {scores.data.match.map(match => (
            <li key={match.id}>
              home_name:{match.home_name}
              score:{match.score}

            </li>
          ))};
        </ul>
      </div>
    );
  }
}

export default Scores;
