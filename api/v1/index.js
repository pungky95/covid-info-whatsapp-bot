const express = require('express');

const router = express.Router();
const getCountryListController = require('./covid-public-api/getCountryList');
const covidDataController = require('./covid-public-api/covidData');

router.get('/', (req, res) => {
  res.send('Hi Welcome to Whatsapp bot services');
});
router.get('/get-country-list', getCountryListController.getCountryList);
router.post(
  '/get-confirmed-case-by-country',
  covidDataController.getConfirmedCaseByCountryToday
);
router.post(
  '/get-death-case-by-country',
  covidDataController.getDeathCaseByCountryToday
);
router.post(
  '/get-confirmed-case-world-global',
  covidDataController.getConfirmedCaseWorldGlobal
);
router.post(
  '/get-death-case-world-global',
  covidDataController.getDeathCaseWorldGlobal
);
module.exports = router;
