const fs = require('fs');

//读取目录的内容
fs.readdir('./', (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
})