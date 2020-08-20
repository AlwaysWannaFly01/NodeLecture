const fs = require('fs')

//异步地打开文件
fs.open('test.txt', 'r+', function (error, fd) {
    if (error) {
        return console.error(error);
    }else{
        console.log('file is open')
    }
})