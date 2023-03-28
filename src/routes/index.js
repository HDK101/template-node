import UserController from '../app/controllers/UserController';

export default function (fastify, opts, done) {
  fastify.post('/users', UserController.store);
  fastify.get('/users', UserController.index);
  done();
}
