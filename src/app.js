import fastify from 'fastify';
import dotenv from 'dotenv';

import routes from './routes';

const app = fastify({
  logger: true,
});

async function start() {
  dotenv.config();
  try {
    app.register(routes);
    await app.listen({ port: 3000 });
  } catch (err) {
    console.error(err);
  }
}

start();
