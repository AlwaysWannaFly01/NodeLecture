const http = require('http');
const io = require('socket.io');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (request.url === '/') {
        fs.readFile('./client.html', 'utf8', (err, data) => {
            if (err) {
                console.log('error occured');
                return;
            } else {
                response.end(data.toString());
            }
        })
    } else {
        response.end('<html><body>Error</body></html>');
    }
})

server.listen(3000, 'localhost');

const socket = io.listen(server);

socket.on('connection', (socket) => {
    console.log('connection has been established');
    socket.on('message', (message) => {
        console.log('message: ' + message)
    })

    socket.on('disconnect', () => {
        console.log('connection has lost')
    })

    socket.emit('serverEvent', 'this is serverEvent');

    socket.on('clientEvent', (data) => {
        console.log(data.address + ', ' + data.age)
    })

    socket.on('broadcastEventClient', (message) => {
        console.log(message);
        //当有新的客户端链接时,向所有已连接的客户端广播消息
        socket.broadcast.emit('broadcastEventServer', 'you are good');
    })


    socket.send('hello client');
})