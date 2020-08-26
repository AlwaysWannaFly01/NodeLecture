/*返回 Node.js 的版本信息*/
console.log(`版本: ${process.version}`);

/*返回一个对象，此对象列出了Node.js和其依赖的版本信息*/
console.log(`版本: ${JSON.stringify(process.versions)}`);

/*平台版本*/
console.log(process.platform);

/*node安装目录*/
console.log(process.execPath)

console.log(process.config)

/*当前进程Id*/
console.log(process.pid);

console.log(process.title)

console.log(process.arch)

/*当前内存信息*/
console.log(process.memoryUsage());

/*当前工作目录*/
console.log(process.cwd());

/*回退到上层目录*/
process.chdir('../');

console.log(process.cwd());

/*环境变量*/
console.log(process.env)

// process.env.NODE_ENV = 'dev'

/*当前进程执行时间*/
console.log(process.uptime());

process.on('exit', () => {
    console.log('node process exited');
})

// process.exit(0);

process.on('beforeExit', () => {
    console.log('node process before exited');
})

process.on('uncaughtException', error => {
    console.log(error);
    console.log('===')
    console.log('uncaughtException occured');
})

process.on('SIGINT', () => {
    console.log('received SIGINT info')
})

setTimeout(() => {
    console.log('timeout')
}, 100000)