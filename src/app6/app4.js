const EventEmitter = require('events');

const emitter = new EventEmitter();

/*实例在新的监听器被添加到其内部监听器数组之前，会触发自身的 'newListener' 事件。*/
/*只处理一次，避免无限循环。*/
emitter.once('newListener', (event, listerer) => {
    if (event === 'myEvent') {
        emitter.on('myEvent', () => {
            console.log('hello')
        })
    }
})

emitter.on('myEvent', () => {
    console.log('world')
})

emitter.emit('myEvent');