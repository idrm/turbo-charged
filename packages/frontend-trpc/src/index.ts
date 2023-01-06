import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from 'api-routing'

export const trpc = createTRPCReact<AppRouter>()
