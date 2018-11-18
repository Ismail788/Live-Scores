import React, { Component } from 'react';

class CountryScores extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    let { countryId, countryName, countryLiveScores } = this.props;

    if (!countryId) {
      return <div>loading...</div>
    }

    return (
      <div className='Score'>
        <h1>{countryName} Live Scores</h1>
        <ul>
          {countryLiveScores.map(match => (
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

export default CountryScores;
