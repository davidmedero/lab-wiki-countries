import React, { useState, useEffect } from 'react';
import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  const newCon = () => {
    return countries.map((country, i) => {
      return (
        <Link key={i} to={`/country/${country.alpha3Code}`}>
          <div className="list-group-item list-group-item-action">
            <img className="flag" src={country.flag} />
            {country.name}
          </div>
        </Link>
      );
    });
  };

  return (
    <div>
      <div>
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">{newCon()}</div>
        </div>
        <div className="container details">
          <div className="row">
            <CountryDetails countries={countries} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
