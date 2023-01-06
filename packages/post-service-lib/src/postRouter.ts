import { faker } from '@faker-js/faker'
import * as mqtt from 'mqtt'
import prisma from 'post-database'
import { UserMessage } from 'user-service-lib'
import { z } from 'zod'
import t from './trpc'

export type PostMessage =
  | {
      type: 'PostCreated'
      postId: number
    }
  | {
      type: 'PostDeleted'
      postId: number
    }

function publishMessage(msg: PostMessage) {
  client.publish('post', JSON.stringify(msg))
}

const client = mqtt.connect('mqtt://localhost:1883')

client.on('connect', function () {
  client.subscribe('user')
})

client.on('message', async function (topic: string, message: string) {
  if (topic === 'user') {
    const msg = JSON.parse(message) as UserMessage
    if (msg.type === 'UserDeleted') {
      await prisma.post.deleteMany({
        where: {
          userId: msg.userId,
        },
      })
    }
  }
})

const postRouter = t.router({
  getAllPosts: t.procedure.query(async () => {
    return await prisma.post.findMany()
  }),
  addRandomPost: t.procedure
    .input(
      z.object({
        userId: z.number(),
      }),
    )
    .mutation(async ({ input: { userId } }) => {
      const post = await prisma.post.create({
        data: {
          userId,
          body: faker.lorem.sentence(5).replace('.', ''),
        },
      })
      publishMessage({
        type: 'PostCreated',
        postId: post.id,
      })
    }),
  deletePost: t.procedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ input: { id } }) => {
      await prisma.post.delete({
        where: {
          id,
        },
      })
      publishMessage({
        type: 'PostCreated',
        postId: id,
      })
    }),
})

export default postRouter
