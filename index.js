'use strict';
// require()
// Resolving -> Loading -> Wrapping -> Evaluation -> Caching
const fs = require('fs').promises;
const myMath = require('./myMath');
// require('test-package'); // < - Error
/* 
  How require works:

  1) Core modules. (fs, path, http, crypto)
  2) File
    2.1) js
    2.2) json
  3) Directory
    3.1) package.json -> "main"
    3.2) index .js | .json
  4) node_modules
  5) throw new Error
*/
