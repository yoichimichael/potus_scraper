const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

rp(url)
  .then(function(html) {
    console.log(html);
  })
  .catch(function(err) {
    //handle error
  });