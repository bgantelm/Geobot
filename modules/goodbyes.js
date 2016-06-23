function replyGoodbyes() {
  const answers = [
    'Bye!',
    'That\'s great to talk with you!',
    'Have a great day!',
    'See you soon',
  ]
  return new Promise((resolve, reject) => {
    console.log(reject)
    resolve(answers[Math.floor(Math.random() * 2)])
  })
}

module.exports = replyGoodbyes
