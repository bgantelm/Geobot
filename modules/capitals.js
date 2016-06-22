const request = require('request-promise')
const config = require('../config.js')

function getCapitals(recast) {
	 const move = recast.get('location')
	 console.log(recast.sentences[0])
	  if (!move) 
	  { 
	  	return new Promise((resolve, reject) => { reject('Sorry, technical problem. I need some more training..' ) })
	  }
	  const param = {
	  	uri: config.countries.route + 'name/' + move.raw,
	  	headers: {
	  		"X-Mashape-Key": "gWOl3F7LtImsh0pzKPi1mwL2DyjXp1dC08fjsnK0w8tGARvtkk",
	  		"Accept": "application/json"
	  	}
	  }
	return request(param)
	.then(function (result) {
		  return (JSON.parse(result)[0].capital)
	})
	.catch(function (error) {
		return ('lol')
		})
}

module.exports = getCapitals;


