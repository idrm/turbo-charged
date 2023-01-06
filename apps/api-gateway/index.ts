import replyFrom from '@fastify/reply-from'
import fastify from 'fastify'

const server = fastify()

server.register(replyFrom)

interface ServiceEndpoint {
  ns: string
  endpoint: string
}

const serviceEndpoints: ServiceEndpoint[] = [
  {
    ns: 'user',
    endpoint: 'http://localhost:3021',
  },
  {
    ns: 'post',
    endpoint: 'http://localhost:3022',
  },
]

server.get('/api/trpc/*', (request, reply) => {
  for (const se of serviceEndpoints) {
    const prefix = `/api/trpc/${se.ns}.`
    if (request.url.startsWith(prefix)) {
      reply.from(`${se.endpoint}/trpc/${request.url.substring(prefix.length)}`)
    }
  }
})

server.post('/api/trpc/*', (request, reply) => {
  for (const se of serviceEndpoints) {
    const prefix = `/api/trpc/${se.ns}.`
    if (request.url.startsWith(prefix)) {
      reply.from(`${se.endpoint}/trpc/${request.url.substring(prefix.length)}`)
    }
  }
})

server.listen({ port: 3011 })

//console.log('gateway listening on', 3011)
