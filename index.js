'use strict';
// require()
// Resolving -> Loading -> Wrapping -> Evaluation -> Caching
// const myMath = require('./myMath');
const fs = require('fs').promises;

fs.readFile('./index.txt', 'utf8').then((content) => {
  const str = 'Appending STR';
  const dataToAppend = `Old content:${content}\nNew content:${str}`;
  fs.appendFile('./newFile.txt', dataToAppend, 'utf8');
});
