const request = require('request-promise')
const config = require('../config.js')

function getCurrency(recast) {
  const move = recast.get('location')
  console.log(recast.sentences[0])
  if (!move) { return new Promise((resolve, reject) => { reject('Sorry, technical problem. I need some more training..') }) }
  const param = {
    uri: config.countries.route + 'name/' + move.raw,
    headers: {
      'X-Mashape-Key': 'sFfEWLjegYmshHHnp906HTPvhRsHp1TLkzfjsnbxgORXiuf9sv',
      Accept: 'application/json',
    },
  }
  return request(param)
	.then((result) => 'The currency of ' + JSON.parse(result)[0].name + ' is ' + JSON.parse(result)[0].currencies[0])
	.catch((error) => {
  console.log(error)
  return ('lol')
		})
}

module.exports = getCurrency
