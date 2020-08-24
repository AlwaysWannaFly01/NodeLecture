const http = require('http');
const httpServer = http.createServer();

// httpServer.on('request', (request, response) => {
//     if (request.url === '/') {
//         console.log('addListener');
//         response.end('end');
//     }
// })
//
const listener = (request, response) => {
    if (request.url === '/') {
        console.log('hello world');
        response.end('welcome');
    }
}
/*添加事件监听器*/
httpServer.on('request', listener)

/*移除事件监听器*/
httpServer.removeListener('request', listener)

// httpServer.removeAllListeners('request') //移除所有的监听器

httpServer.listen(3000, () => {
    console.log('listening to port 3000')
})