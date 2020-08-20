const fs = require('fs')

fs.rename('hello.txt', 'world.txt',(error)=>{
    if(error){
        throw error;
    }
    fs.stat('world.txt',(error,stats)=>{
        if(error){
            throw  error;
        }
        console.log(JSON.stringify(stats))
    })
})

