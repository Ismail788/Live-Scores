import React, { Component } from 'react';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      isloaded: false,
      success: true
    }
  }

  componentDidMount() {
    fetch(`http://livescore-api.com/api-client/countries/list.json?key=${Demo_key}&secret=${Demo_secret}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          this.setState({
            isloaded: true,
            success: true,
            countries: json,
          })
        } else {
          this.setState({
            isloaded: true,
            success: false,
          })
        }

      })
  }

  render() {
    let { isloaded, success, countries } = this.state;

    if (!isloaded) {
      return <div>loading...</div>
    }

    if (!success) {
      return <div>error while fetching countries</div>
    }

    return (
      <div className='country-container'>
        <h1>All Countries</h1>
  
        <select onChange={this.props.onCountrySelect}>
          <option key={0} value={0}>Select a country</option>
          {
            countries.data.country.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))
          }
        </select>
      </div>
        );
  }
}
export default Countries;
