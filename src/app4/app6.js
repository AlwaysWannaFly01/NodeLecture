const net = require('net');

const server = net.createServer(socket => {
    const address = socket.address();
    const message = 'server address is ' + JSON.stringify(address);

    socket.write(message, 'utf8', () => {
        const writeSize = socket.bytesWritten;

        console.log(message);
        console.log('message size is ' + writeSize);
    });

    socket.on('data', data => {
        console.log(data.toString());

        const readSize = socket.bytesRead;//服务器建立,读取的总字节数

        console.log('data size is ' + readSize);
    })
});

server.listen(8899,()=>{
    console.log('server is listening');
})