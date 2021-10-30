const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

rp(url)
  .then(html => {
    const $ = cheerio.load(html);
    console.log("hello");
    const birthday = $('span.bday').parent().parent().text();
    console.log(birthday);
  })
  .catch(console.log);