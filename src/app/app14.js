const path = require('path')
//获取文件拓展名
const extInfo = path.extname(path.join(__dirname, 'myDir', 'hello.js'));
console.log(extInfo)
