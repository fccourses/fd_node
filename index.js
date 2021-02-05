'use strict';
// require()
// Resolving -> Loading -> Wrapping -> Evaluation -> Caching

const myMath = require('./myMath');
require('./app');

console.log(__filename);

/* console.log(myMath);
console.log('hello node');

const res = myMath.sum(123, 123, 123);

console.log('Sum is ', res); */
