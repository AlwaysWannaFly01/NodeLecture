const childProcess = require('child_process');

childProcess.exec('node app7',(error,stdout,stderr) =>{

    if(error){
        console.log(error);
        throw error;
    }else{
        console.log(stdout.toString())
    }
});