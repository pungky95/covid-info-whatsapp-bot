const keys = require('../../../config/keys');
const axios = require('axios').default;
const { APIURLCOVID } = keys;

exports.getCountryList = async (req, res) => {
  return axios
    .get(`${APIURLCOVID}/countries`)
    .then(response => {
      return res.send(response.data);
    })
    .catch(err => {
      console.error(`Whops something was wrong : ${err.message}`);
      return res.status(500).send({
        message: err.message
      });
    });
};
