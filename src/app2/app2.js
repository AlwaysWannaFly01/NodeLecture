const fs = require('fs')

fs.open('test.txt', 'r+', function (error, fd) {
    if (error) {
        return console.error(error);
    }
    console.log('file is open');

    fs.close(fd, function (error) {
        if (error) {
            console.error(error)
        }
        console.log('file is closed');
    })
})