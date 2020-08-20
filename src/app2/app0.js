/*
*  Node操作文件系统通过原生模块来实现:fs;
*  对于fs中的绝大多数qpi,Node都提供了相同功能的两个版本:同步版本和异步版本;
*  xxxx(异步)
*  xxxxSync(同步)
*  尽最大可能去使用异步版本,不会阻塞主线程;
*/
const fs = require('fs');

//读取文件
try {
    const data = fs.readFileSync('test.txt', 'utf-8');
    console.log(data);
} catch (e) {
    console.log(e);
}

fs.readFile('test.txt', {encoding: 'utf8', flag: 'r'}, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

//写入文件, 默认'w': 打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
fs.writeFile('mytest.txt', 'mytestfg, node.js', function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log('write file successful')
    }
})

// flag: 'a', 打开文件用于追加。 如果文件不存在，则创建该文件。
fs.writeFile('mytest2.txt', 'mytest2, node.js\r\n', {flag: 'a'}, function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log('write file successful')
    }
})