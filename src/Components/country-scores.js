import React, { Component } from 'react';
import { TableRow, TableCell, TableBody, Paper, Table, TableHead} from '@material-ui/core';

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
      <div className='country-score'>
        <h1>{countryName} Live Scores</h1>
        <table className=''>
        <thead>
          <TableRow>
          <TableCell numeric>Home-name</TableCell>
          <TableCell numeric>score</TableCell>
          </TableRow>
        </thead>
        <TableBody>
        {countryLiveScores.map(match => (
            <TableRow key={match.id}> 
            <TableCell numeric>{match.home_name}</TableCell> 
           <TableCell numeric>{match.score}</TableCell>
              
           </TableRow>
          
          ))};
         </TableBody>
         
        </table>
      </div>
    );
  }
}

export default CountryScores;
