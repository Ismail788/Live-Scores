import React, { Component } from 'react';

const Demo_key = '6r94GgdPiJ5ciqdx';
const Demo_secret = '70Qx0KjZN2uD6jfdLohrFuhXem9wNm4U';

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      isloaded: false,
    }
  }

  componentDidMount() {
    fetch(`http://livescore-api.com/api-client/countries/list.json?key=${Demo_key}&secret=${Demo_secret}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isloaded: true,
          countries: json,
        })
      })
  }

  onCountrySelect = e => {
    e.preventDefault();
    const countryId = e.target.value;
  }

  render() {
    let { isloaded, countries } = this.state;

    if (!isloaded) {
      return <div>loading...</div>
    }

    return (
      <div calss='Country'>
        <h1>All Countries</h1>
        <select onChange={this.onCountrySelect}>
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
