'use strict';
// require()
// Resolving -> Loading -> Wrapping -> Evaluation -> Caching
// const myMath = require('./myMath');
const fs = require('fs').promises;

fs.readFile('./index.txt', 'utf8').then((content) => {
  console.log(content);
  console.log(typeof content);
});
