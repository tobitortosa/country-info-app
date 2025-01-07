const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const countriesRoutes = require('./routes/countries');
const countryInfoRoutes = require('./routes/countryInfo');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/countries', countriesRoutes);
app.use('/api/countryInfo', countryInfoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
