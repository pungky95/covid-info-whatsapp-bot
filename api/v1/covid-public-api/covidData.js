const keys = require('../../../config/keys');
const axios = require('axios').default;
const { APIURLCOVID } = keys;
const models = require('../../../models');

const getConfirmedCaseByCountryToday = async (req, res) => {
  const code = req.body.Field_code_Value;
  if (!code) {
    return res.status(400).send({ actions: [{ say: 'Country Code Invalid' }] });
  }
  const country = await models.Country.findByPk(code);
  if (!country) {
    return res.status(200).send({ actions: [{ say: 'Country Code Invalid' }] });
  }
  const url = `${APIURLCOVID}/total/country/${country.slug}`;
  let results = [];
  await axios
    .get(url)
    .then(response => {
      results = response.data;
    })
    .catch(err => {
      console.error(`Whops something was wrong : ${err.message}`);
      return res
        .status(200)
        .send({ actions: [{ say: 'Something was wrong try again' }] });
    });
  let Confirmed = 0;
  if (results.length > 0) {
    const latestData = results.pop();
    Confirmed = latestData.Confirmed;
  }
  return res
    .status(200)
    .send({ actions: [{ say: `${country.code} Active Cases ${Confirmed}` }] });
};
const getDeathCaseByCountryToday = async (req, res) => {
  const code = req.body.Field_code_Value;
  if (!code) {
    return res.status(200).send({ actions: [{ say: 'Country Code Invalid' }] });
  }
  const country = await models.Country.findByPk(code);
  if (!country) {
    return res.status(200).send({ actions: [{ say: 'Country Code Invalid' }] });
  }
  const url = `${APIURLCOVID}/total/country/${country.slug}`;
  let results = [];
  await axios
    .get(url)
    .then(response => {
      results = response.data;
    })
    .catch(err => {
      console.error(`Whops something was wrong : ${err.message}`);
      return res
        .status(200)
        .send({ actions: [{ say: 'Something was wrong try again' }] });
    });
  let Deaths = 0;
  if (results.length > 0) {
    const latestData = results.pop();
    Deaths = latestData.Deaths;
  }
  return res
    .status(200)
    .send({ actions: [{ say: `${country.code} Deaths ${Deaths}` }] });
};
const getConfirmedCaseWorldGlobal = async (req, res) => {
  const url = `${APIURLCOVID}/world/total`;
  await axios
    .get(url)
    .then(response => {
      const { TotalConfirmed } = response.data;
      return res
        .status(200)
        .send({ actions: [{ say: `Total Active Cases ${TotalConfirmed}` }] });
    })
    .catch(err => {
      console.error(`Whops something was wrong : ${err.message}`);
      return res
        .status(200)
        .send({ actions: [{ say: 'Something was wrong try again' }] });
    });
};
const getDeathCaseWorldGlobal = async (req, res) => {
  const url = `${APIURLCOVID}/world/total`;
  await axios
    .get(url)
    .then(response => {
      const { TotalDeaths } = response.data;
      return res
        .status(200)
        .send({ actions: [{ say: `Total Deaths ${TotalDeaths}` }] });
    })
    .catch(err => {
      console.error(`Whops something was wrong : ${err.message}`);
      return res
        .status(200)
        .send({ actions: [{ say: 'Something was wrong try again' }] });
    });
};
module.exports = {
  getConfirmedCaseByCountryToday,
  getDeathCaseByCountryToday,
  getConfirmedCaseWorldGlobal,
  getDeathCaseWorldGlobal
};
