function replyGreetings() {
  const answers = [
    'Hello',
    'That\'s great to talk with you!',
    'Welcome there!',
  ]

  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 2)])
  })
}

module.exports = replyGreetings
