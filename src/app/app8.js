const url = require('url');

const urlObject = {
    'host': 'www.test.com',
    'port': "80",
    'protocol': 'http',
    'search': '?orderId=12345',
    'query': 'orderId=12345',
    'path': '/'
}
let realAddress = url.format(urlObject)

console.log(realAddress)