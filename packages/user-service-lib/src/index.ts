import t from './trpc'
import userRouter from './userRouter'
export type { UserMessage } from './userRouter'

export const appRouter = t.router({
  user: userRouter,
})

export type AppRouter = typeof appRouter
