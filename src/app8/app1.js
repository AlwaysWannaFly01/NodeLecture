const fs = require('fs');

const myFunction = () => {
    console.log('myFunction invoked');
}

/*同步方法执行之后,异步方法执行之前*/
process.nextTick(myFunction);

console.log(fs.readFileSync('./app1.js').toString('utf8'));

fs.readFile('./app1.js', (err, data) => {
    console.log(data.toString('utf8'))
});

