const querystring = require('querystring');

const str = 'name=zhangsan&address=wuhan';
const obj = querystring.parse(str);
console.log(obj)