const querystring = require('querystring');

const obj = {
    name:'zhangsan',
    address:'wuhan'
}

const result = querystring.stringify(obj)
console.log(result)