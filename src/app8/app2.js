// const childProcess = require('child_process');
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

// console.log(process.env.PATH)
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

// const lsChildProcess = childProcess.spawn('ls', ['-al', './']);

// lsChildProcess.stdout.on('data', (data) => {
//     console.log(data.toString());
//     console.log(`child process id: ${lsChildProcess.pid}`)
// })

