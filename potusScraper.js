const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States';


rp(url)
  .then(html => {
    const $ = cheerio.load(html);
    console.log($('b > a', html).length);
    // console.log($('b > a', html));
  })
  .catch(function(err){
    //handle error
  });