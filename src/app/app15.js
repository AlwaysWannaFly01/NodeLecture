const path = require('path');
const util = require('util');

const filePath = '/Users/hello/node/test.js'

const obj = util.inspect(path.parse(filePath), {
    'colors':true
})

console.log(obj)