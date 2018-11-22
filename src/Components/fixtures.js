import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';

class Fixtures extends Component {
  constructor() {
    super();
    this.state = {
      fixtures: [],
      success: true,
      isLoaded: false,
    }
  
  }
 
  
  componentDidMount() {
    fetch(`http://livescore-api.com/api-client/fixtures/matches.json?key=${Demo_key}&secret=${Demo_secret}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          this.setState({
            fixtures: json,
            isloaded: true,
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
    let { isloaded, success, fixtures } = this.state;

    if (!isloaded) {
      return <div>loading...</div>
    }
    
    if (!success) {
      return <div>error while fetching fixtures</div>
    }

    return (
      <div className='main-container'>
      <div className='fixtures'>
      <Paper className='scores-table'>
      <h3>All fixtures</h3>
      <Table className='scores'>
        <TableHead>
          <TableRow>
            <TableCell numeric>Date</TableCell>
            <TableCell numeric>Time</TableCell>
            <TableCell numeric>Home_name</TableCell>
            <TableCell numeric>Away_name</TableCell>
            <TableCell numeric>Location</TableCell>
            <TableCell numeric>League_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fixtures.data.fixtures.map(row => (
            
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {row.home_name}}
                </TableCell>
                <TableCell numeric>{row.date}</TableCell>
                <TableCell numeric>{row.time}</TableCell>
                <TableCell numeric>{row.home_name}</TableCell>
                <TableCell numeric>{row.away_name}</TableCell>
                <TableCell numeric>{row.location}</TableCell>
                <TableCell numeric>{row.league_id}</TableCell>
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
export default Fixtures;
