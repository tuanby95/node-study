const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');

const router = new Router();
router.get('/', async ({ request, response }, next) => {
    response.body = 'Service is up and running';
});
router.get('/hello', async ({ request, response }, next) => {
    response.body = 'Hello world';
});
router.get('/ping', async ({ response }) => response.body = 'pong');
router.get('/servertime', async ({ response }) => response.body = (new Date()).toString());

const app = new Koa();
app.use(router.routes());

const server = http.createServer(app.callback());
server.listen(8080, () => console.log('Server is listening on port', 8080));
