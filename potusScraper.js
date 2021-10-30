const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States';

rp(url).then(html => {
    const $ = cheerio.load(html);
    const presTable = $('.wikitable b > a');
    const wikiUrls = [];
    for (let i = 0; i <= 45; i++) {
      const url = presTable[`${i}`].attribs.href;
      wikiUrls.push(url);
    }
    console.log(wikiUrls)
  }).catch(console.log);