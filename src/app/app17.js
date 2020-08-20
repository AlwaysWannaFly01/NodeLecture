const dns = require('dns');

dns.reverse('114.114.114.114',function(error ,domain){
    console.log(domain)
})