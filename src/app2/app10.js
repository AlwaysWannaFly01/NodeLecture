const fs = require('fs');

//根据相对路径获取文件的绝对路径
fs.realpath('app0.js',(err, resolvedPath) => {
    if(err){
        throw err;
    }
    console.log(resolvedPath)
})