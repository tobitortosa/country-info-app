import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CountryList.css';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/countries')
      .then(response => setCountries(response.data))
      .catch(error => console.error("Hubo un error al obtener los países:", error));
  }, []);

  return (
    <div className="country-list">
      <h2>Lista de Países</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Link to={`/countryInfo/${country.name}?code=${country.countryCode}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
