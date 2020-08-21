const fs = require('fs');

fs.access('./app.js', err => {
    if(err){
        throw err;
    }
    console.log('success')
})