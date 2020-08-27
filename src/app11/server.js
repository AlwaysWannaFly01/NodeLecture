const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.response.type = 'application/json';

    const responseBody = {
        result: {
            code: 0,
            description: 'success'
        },
        data: {
            username: 'zhangsan',
            address: 'wuhan',
            age: 23
        }
    };

    ctx.response.body = JSON.stringify(responseBody);

});

app.listen(4000);