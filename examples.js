const dict = require('./index.js');

const options = {
  word: 'hacer',
  tense: 'preteritIndicative',
  person: '2',
  translateOnError: true
};

dict.translate(options)
  .then(console.log)
  .catch(console.log);

//Outputs: [ 'to do', 'to make' ]

dict.conjugate(options)
  .then(console.log)
  .catch(console.log);

//Outputs: [ 'hizo' ]
