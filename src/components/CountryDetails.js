import React from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  let countries = props.countries;
  let countryClicked = countries.find(
    (country) => country.alpha3Code === props.match.params.potato
  );

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
