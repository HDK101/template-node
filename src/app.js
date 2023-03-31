import Koa from 'koa';
import dotenv from 'dotenv';
import CSRF from 'koa-csrf';

import sync from './database/sync';
import routes from './routes';

async function start() {
  dotenv.config();

  await sync();

  const app = new Koa();

  app
    .use(new CSRF())
    .use(routes);
}

start();
