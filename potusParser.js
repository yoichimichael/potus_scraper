const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

module.exports = (url) => {
  return rp(url)
    .then(html => {
      const $ = cheerio.load(html);
      const name = $('#firstHeading').text();
      const birthday = $('span.bday')[0].children[0].data;
      return {name, birthday};
    })
    .catch(console.log);
}