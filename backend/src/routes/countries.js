const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.DATE_NAGER_API_BASE_URL}/AvailableCountries`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('"Error getting the country list"');
  }
});

module.exports = router;
