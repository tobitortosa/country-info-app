const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {

  const { countryCode, country } = req.body;

  try {
    const borderResponse = await axios.get(`${process.env.DATE_NAGER_API_BASE_URL}/CountryInfo/${countryCode}`);
    const borderCountries = borderResponse.data.borders;

    const populationResponse = await axios.post(`${process.env.COUNTRIES_NOW_API_BASE_URL}/countries/population`, { country });
    const populationData = populationResponse.data.data;

    const flagResponse = await axios.post(`${process.env.COUNTRIES_NOW_API_BASE_URL}/countries/flag/images`, { iso2: countryCode });
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
