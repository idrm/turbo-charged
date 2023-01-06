import { faker } from '@faker-js/faker'
import * as mqtt from 'mqtt'
import prisma from 'user-database'
import { z } from 'zod'
import t from './trpc'

export type UserMessage =
  | {
      type: 'UserCreated'
      userId: number
    }
  | {
      type: 'UserDeleted'
      userId: number
    }

function publishMessage(msg: UserMessage) {
  client.publish('user', JSON.stringify(msg))
}

const client = mqtt.connect('mqtt://localhost:1883')

const userRouter = t.router({
  getAllUsers: t.procedure.query(async () => {
    return await prisma.user.findMany()
  }),
  addRandomUser: t.procedure.input(z.object({})).mutation(async () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const user = await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email: faker.internet.email(firstName, lastName),
      },
    })
    publishMessage({
      type: 'UserCreated',
      userId: user.id,
    })
  }),
  deleteUser: t.procedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ input: { id } }) => {
      await prisma.user.delete({
        where: {
          id,
        },
      })
      publishMessage({
        type: 'UserDeleted',
        userId: id,
      })
    }),
})

export default userRouter
