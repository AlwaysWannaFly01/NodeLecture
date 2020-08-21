const fs = require('fs');

//以递归模式删除当前目录及其子目录
fs.rmdir('mydir', {recursive: true}, err => {
    if (err) {
        throw err
    }
    console.log('success')
})