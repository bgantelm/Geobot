const request = require('request-promise')
const config = require('../config.js')

function getCountry(recast) {
  const move = recast.get('location')
  console.log(recast.sentences[0])
  if (!move) {
    return new Promise((resolve, reject) => { reject('Sorry, technical problem. I need some more training..') })
  }
  const param = {
    uri: config.countries.route + 'capital/' + move.raw,
    headers: {
      'X-Mashape-Key': 'sFfEWLjegYmshHHnp906HTPvhRsHp1TLkzfjsnbxgORXiuf9sv',
      Accept: 'application/json',
    },
  }
  return request(param)
  .then((result) => JSON.parse(result)[0].capital + ' is the capital city of ' + JSON.parse(result)[0].name)
	.catch((error) => {
  console.log(error)
  return ('lol')
		})
}

module.exports = getCountry
