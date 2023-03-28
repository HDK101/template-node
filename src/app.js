import fastify from 'fastify';
import dotenv from 'dotenv';
import { fastifyMiddie } from '@fastify/middie';

import routes from './routes';
import sync from './database/sync';

const app = fastify({
  logger: true,
});

async function start() {
  dotenv.config();

  await sync();

  await app.register(fastifyMiddie, {
    hook: 'onRequest',
  });

  app.use((req, res, next) => {
    console.log('hello');
    next();
  });

  try {
    app.register(routes);
    await app.listen({ port: 3000 });
  } catch (err) {
    console.error(err);
  }
}

start();
