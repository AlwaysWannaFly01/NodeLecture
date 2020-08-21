const fs = require('fs');

//异步地创建目录。
//当 path 是已存在的目录时，调用 fs.mkdir() 仅在 recursive 为 false 时才会导致错误

fs.mkdir('mydir/hello/world',{ recursive: true }, (err) => {
    if(err){
        throw err;
    }
    console.log('success')
})