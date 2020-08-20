const dns = require('dns');

const domain = 'www.sohu.com';

//解析域名
dns.resolve(domain, function (error, address) {
     if(error){
         console.log(error);
         return;
     }
    console.log(address)
})

