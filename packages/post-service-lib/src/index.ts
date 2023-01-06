import postRouter from './postRouter'
import t from './trpc'

export const appRouter = t.router({
  post: postRouter,
})

export type AppRouter = typeof appRouter
