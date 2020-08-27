const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log('myFunction started');
    await next();
    console.log('myFunction finished')
});

app.use(async (ctx, next) => {
    console.log('myFunction2 started');
    await next();
    console.log('myFunction2 finished')
});

app.use(async (ctx, next) => {
    console.log('myFunction3 started');
    await next();
    console.log('myFunction3 finished')
});



app.use(async ctx => {

    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>hello</h2>';

});

app.listen(3000);