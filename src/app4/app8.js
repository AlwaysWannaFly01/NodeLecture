const net = require('net');
const client = new net.Socket();
//创建客户端链接到端口9999的TCP server上
client.connect(9999,'localhost',()=>{
    console.log('connect to the server');
})