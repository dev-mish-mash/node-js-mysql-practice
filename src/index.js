const Koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const _router = require('koa-router');

const run = async () => {
    const app = new Koa();
    const router = _router(router);
    app.use(cors());
    app.use(logger);
    app.use(koaBody());
    app.use(_router.routes());

    const port = 8000;
    const server = await app.listen(port);
    console.log(`server run ${port}`);
    return server;
}

run();

