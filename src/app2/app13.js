const fs = require('fs');

//读入流
const readStream = fs.createReadStream('./app12.js', {encoding: 'utf8'})

//写出流
const writeStream = fs.createWriteStream('mytest.js', {encoding: 'utf8'})

readStream.on('data', (data) => {
    writeStream.write(data, () => {
        console.log(data)
    })
})