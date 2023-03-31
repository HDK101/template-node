import Router from '@koa/router';

import UserController from '../app/controllers/UserController';

const router = new Router();

router.post('/', UserController.store);

export default router.routes();
