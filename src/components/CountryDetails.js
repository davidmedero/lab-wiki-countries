import React from 'react';
// import countries from '../countries';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  console.log(props.countries);
  let countries = props.countries;
  let countryClicked = countries.find(
    (country) => country.alpha3Code === props.match.params.potato
  );

  console.log(countryClicked);
  function getBorder() {
    return countryClicked?.borders.map((border, i) => {
      let bordersArr = countries.find((country) => {
        return country.alpha3Code === border;
      });

      return (
        <Link key={i} to={`/country/${border}`}>
          <li>
            <img className="flag" src={bordersArr.flag} /> {bordersArr.name}
          </li>
        </Link>
      );
    });
  }

  return (
    <div>
      {/* <h1>{props.match.params.potato}</h1>
           <h1>{countryClicked.name.common}</h1> */}
      <div style={{ width: '50vw' }} className="col-7">
        <h1>{countryClicked?.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{countryClicked?.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryClicked?.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{getBorder()}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
