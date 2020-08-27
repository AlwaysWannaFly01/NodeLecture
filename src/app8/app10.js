const cluster = require('cluster');
const http = require('http');
const os = require('os');


const cpuCount = os.cpus().length;

console.log(`cpu核心数:${cpuCount}`);

/*判断当前是否为主进程*/
if (cluster.isMaster) {
    for (let i = 0; i < cpuCount; i++) {
        /*fork:只能通过主进程调用,衍生出一个新的工作进程(非主进程),*/
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(worker.process.pid)
    })

} else {
    const httpServer = http.createServer((request, response) => {
        let data = '';
        request.on('data', chunk => {
            data += chunk;
        })
        request.on('end', () => {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(`子进程监听的端口号: ${process.pid}`);
        })
    });
    httpServer.listen(3000, () => {
        console.log('listening to port 3000');
    })
}