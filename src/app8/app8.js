const {execFile} = require('child_process');

execFile('node', ['app9'], (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(stdout.toString())
    }
})