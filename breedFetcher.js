const request = require('request');

let args = process.argv.slice(2);
let query = args.toString();

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log('Hmmm, there seems to be some problem with the webpage. Check the URL and try again! (=•ｪ•=?');
  }
  if (body === '[]') {
    console.log('Oh no! We can\'t find the breed you are looking. Check your spelling and try again! ฅ^•ﻌ•^ฅ');
  } else {
    // deserialization: parse string to object
    const data = JSON.parse(body);
    console.log(data[0].description, 'ฅ^◕ﻌ◕^ฅ ♥');
  }
});