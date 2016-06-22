function replyGoodbyes() {

    var answers = [
      'Bye!',
      'That\'s great to talk with you!',
      'Have a great day!',
      'See you soon'
    ];

    return new Promise(function(resolve, reject) {
      resolve(answers[Math.floor(Math.random() * 2)]);
    });
}

module.exports = replyGoodbyes;
