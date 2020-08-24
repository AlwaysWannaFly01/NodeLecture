const dgram = require('dgram');

const message = Buffer.from('This message comes from server');

const socket = dgram.createSocket('udp4', (msg, info) => {
    socket.send(message, 0, message.length,9999, info.address, (error, bytes) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('server has send ' + bytes + 'bytes message')
    })
})
socket.bind(9999, 'localhost', () => {
    console.log('server has binded to 9999')
})

socket.on('message', (msg, info) => {
    console.log('message event occured')
    console.log(msg.toString());
})