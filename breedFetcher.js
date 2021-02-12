const request = require('request');

const breedName = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      let error = 'Hmmm, there seems to be some problem with the webpage. Check the URL and try again! (=•ｪ•=?';
      return callback(error, null);
    } else {
      if (body === '[]') {
        let error = 'Oh no! We can\'t find the breed you are looking. Check your spelling and try again! ฅ^•ﻌ•^ฅ';
        return callback(error, null);
      } else {
        const data = JSON.parse(body);
        let desc = data[0].description + 'ฅ^◕ﻌ◕^ฅ ♥';
        return callback(null, desc);
      }
    }
  })
  ;
};

module.exports = {fetchBreedDescription};