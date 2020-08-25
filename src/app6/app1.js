const http = require('http');
const events = require('events');

const httpServer = http.createServer();

/*可以使用 emitter.setMaxListeners(n) 方法改变单个 EventEmitter 实例的限制。*/
httpServer.setMaxListeners(2);

httpServer.on('request', (request, response) => {
    if (request.url === '/') {
        console.log('addListener');
        response.end('end');
    }
})

const listener = (request, response) => {
    if (request.url === '/') {
        console.log('hello world');
        response.end('welcome');
    }
}

const listener2 = (request, response) => {
    if (request.url === '/') {
        console.log('hello world');
        response.end('welcome');
    }
}
/* 默认情况下，每个事件可以注册最多 10 个监听器。*/
console.log('default max listener count: '+ events.EventEmitter.defaultMaxListeners)


/*添加事件监听器*/
httpServer.on('request', listener)
httpServer.on('request', listener2)



httpServer.listen(3000, () => {
    console.log('listening to port 3000')
})