const keys = require('../config/keys');
const axios = require('axios').default;
const { APIURLCOVID } = keys;
module.exports = {
  up: async queryInterface => {
    const rawCountries = await axios
      .get(`${APIURLCOVID}/countries`)
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.error(`Whops something was wrong : ${err.message}`);
      });
    const countries = rawCountries.map(country => {
      return {
        code: country.ISO2,
        country: country.Country,
        slug: country.Slug,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    return queryInterface.bulkInsert('Countries', countries, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
