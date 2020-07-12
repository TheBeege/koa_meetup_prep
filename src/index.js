'use strict';

const Koa = require('koa');
const app = new Koa();

const routes = require('./routes');
const injectTimestampMiddleware = require('./middlewares/injectTimestamp');
const bodyParser = require('koa-bodyparser');

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

app.use(bodyParser());
app.use(injectTimestampMiddleware);

for (let route of routes) {
    app.use(route.middleware());
}

app.listen(3000);
