'use strict';

const myMath = require('./myMath');

console.log(myMath);
console.log('hello node');

const res = myMath.sum(123, 123, 123);

console.log('Sum is ', res);
