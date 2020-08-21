const fs = require('fs');

fs.appendFile('info.txt', 'my info hello world', 'utf8', (err) => {
    if (err) {
        throw err;
    }
    console.log("success")
})