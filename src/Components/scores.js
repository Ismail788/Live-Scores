import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import myfetch from '../util/fetch';
import { TableRow, TableCell, TableBody, Paper, Table, TableHead} from '@material-ui/core';


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
    myfetch(`http://livescore-api.com/api-client/scores/live.json?bla=1`)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          this.setState({
            isloaded: true,
            scores: json, success: true
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
   <div className='main-container'>
   <div className='score'>
     <Paper className='score-table'>
     <h2>All Matches Scores</h2>
     <Table className='scores'>
     <TableHead>
        <TableRow>
              <TableCell numeric>Home-name</TableCell>
              <TableCell numeric>Away-name</TableCell>
              <TableCell numeric>Score</TableCell>
              <TableCell numeric>Status</TableCell>
       </TableRow>
     </TableHead>
          <TableBody>
            {scores.data.match.map(row => (
              <TableRow key={row.id}>
              <TableCell numeric>{row.home_name}</TableCell>
              <TableCell numeric>{row.away_name}</TableCell>
              <TableCell numeric>{row.score}</TableCell>
              <TableCell numeric>{row.status}</TableCell>
           </TableRow> 
               )
            )}
         </TableBody>
       </Table>
      </Paper>
      </div>
    </div>
   
    );
  }
}
export default Scores;



