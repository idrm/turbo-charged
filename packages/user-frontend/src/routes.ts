import { rootRoute } from 'frontend-routing'
import Users from './Users'

const usersRoute = rootRoute.createRoute({
  path: 'users',
  component: Users,
})

const routes = [usersRoute]

export default routes
