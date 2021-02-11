const request = require('request');
let args = process.argv.slice(2);

let query = args.toString();

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
  
  // deserialization: parse string to object
  const data = JSON.parse(body);
  // body becomes string in an array of one object
  console.log(data[0].description);
});