import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>Country Info App</h1>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/countryInfo/:code" element={<CountryInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
