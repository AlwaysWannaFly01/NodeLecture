const net = require('net');

const server = net.createServer(socket => {
    console.log('client connected');
    //限制客服端向服务端链接的总数
    server.maxConnections = 2;
    server.getConnections((error, count) => {
        console.log('client count: ' + count)
    })
})

server.listen(8888, () => {
    console.log('server is listening');
})