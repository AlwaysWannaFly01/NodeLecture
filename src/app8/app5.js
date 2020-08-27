[1,2,3,4,5].forEach(item=>{
    console.log(item)
})

process.on('message',(message)=>{
    console.log(message);
    process.send('welcome');
})