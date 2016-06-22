function replyGreetings() {

    var answers = [
      'Hello',
      'That\'s great to talk with you!',
      'Welcome there!'
    ];

    return new Promise(function(resolve, reject) {
      resolve(answers[Math.floor(Math.random() * 2)]);
    });
}

module.exports = replyGreetings;
