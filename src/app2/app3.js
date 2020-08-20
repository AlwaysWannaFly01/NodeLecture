const fs = require('fs')

//异步地删除文件或符号链接
fs.unlink('hello.txt', (error) => {
    if(error){
        throw error;
    }
    console.log('删除成功');
})