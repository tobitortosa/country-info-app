import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './CountryInfo.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const CountryInfo = () => {
  const { code } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const countryCode = queryParams.get('code');

  useEffect(() => {
    axios.post(`http://localhost:5000/api/countryInfo`, { country: code, countryCode })
      .then(response => setCountryInfo(response.data))
      .catch(error => console.error("Hubo un error al obtener la información del país:", error));
  }, [code, countryCode]);

  if (!countryInfo) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  const populationData = {
    labels: countryInfo.populationData.populationCounts.map(item => item.year),
    datasets: [
      {
        label: 'Población',
        data: countryInfo.populationData.populationCounts.map(item => item.value),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="country-info">
      <h2>Country Information - {code}</h2>
      <img src={countryInfo.flagUrl.data.flag} alt={`${code} flag`} style={{ width: '200px' }} />
      <h3>Border Countries</h3>
      <ul>
        {countryInfo.borderCountries.map((country, index) => (
          <li key={index}>
            <Link to={`/countryInfo/${country.commonName}?code=${country.countryCode}`}>{country.commonName}</Link>
          </li>
        ))}
      </ul>

      <h3>Population Data</h3>
      <div className="chart-container" style={{ height: 'auto', width: 'auto', maxWidth: '600px', maxHeight: '500px'}}>
        <Line key={code} data={populationData} />
      </div>
    </div>
  );
};

export default CountryInfo;
