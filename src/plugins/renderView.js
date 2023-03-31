import fastifyPlugin from 'fastify-plugin';

function renderView(fastify, opts, done) {
  fastify.addHook('preHandler', (request, reply, hookDone) => {
    reply.render = (template, data) => fastify.templateRender(template, {
      session: request.session,
      data,
    });
    hookDone();
  });
  done();
}

export default fastifyPlugin(renderView);
