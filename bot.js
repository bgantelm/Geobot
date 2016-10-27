const restify = require('restify')
const config = require('./config.js')
const slack = require('@slack/client')
const recast = require('recastai')

// IMPORTintents

const getGreetings = require('./modules/greetings.js')
const getGoodbyes = require('./modules/goodbyes.js')
const getCapitals = require('./modules/capitals.js')
const getCountry = require('./modules/country.js')
const getCurrency = require('./modules/currency.js')


// functions intents
const INTENTS = {
  goodbyes: getGoodbyes,
  greetings: getGreetings,
  capitals: getCapitals,
  country: getCountry,
  currency: getCurrency,
}


const recastClient = new recast.Client(config.recast)


const { RtmClient: SlackClient, RTM_EVENTS: slackEvent } = slack
const token = process.env.SLACK_API_TOKEN || config.slack
const rtm = new SlackClient(token, { logLevel: 'false' })
rtm.start()

rtm.on(slackEvent.MESSAGE, (message) => {
  const user = rtm.dataStore.getUserById(message.user)
  if (!user) { return }
  const dm = rtm.dataStore.getDMByName(user.name).id
  console.log(message.text)
  recastClient.textRequest(message.text, (res, err) => {
    if (err) { rtm.sendMessage("I'm getting tired, let's talk later", dm) } else {
      const intent = res.intent()
      console.log(intent)
      if (intent && INTENTS[intent]) {
        INTENTS[intent](res)
        .then((reply) => { rtm.sendMessage(reply, dm) })
        .catch((reply) => { rtm.sendMessage(reply, dm) })
      } else { rtm.sendMessage('I cannot help you on this point', dm) }
    }
  })
})

// Setup Restify Server
const server = restify.createServer()
server.listen(process.env.port || 3002, () => {
  console.log('%s listening to %s', server.name, server.url)
})
