const net = require('net');

const server = net.createServer(socket => {
    console.log('local port: '+socket.localPort);
    console.log('local address: ' +socket.localAddress);
    console.log('remote port: '+socket.remotePort);//远程端口号
    console.log('remote family: '+socket.remoteFamily);
    console.log('remote address: '+socket.remoteAddress);
})
server.listen('9999',()=>{
    console.log('server is listening');
})