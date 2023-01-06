import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import { appRouter } from 'post-service-lib'
import { createContext } from './context'

const server = fastify({
  maxParamLength: 5000,
})

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
})
;(async () => {
  try {
    await server.listen({ port: 3022 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
})()