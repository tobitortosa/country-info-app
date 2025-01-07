const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {

  const { countryCode, country } = req.body;

  try {
    const borderResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    const borderCountries = borderResponse.data.borders;

    const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', { country });
    const populationData = populationResponse.data.data;

    const flagResponse = await axios.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, { iso2: countryCode });
    const flagUrl = flagResponse.data;

    res.json({
      borderCountries,
      populationData,
      flagUrl
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('"Error getting the country information"');
  }
});

module.exports = router;
