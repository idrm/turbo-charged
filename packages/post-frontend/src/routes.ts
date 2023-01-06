import { rootRoute } from 'frontend-routing'
import Posts from './Posts'

const postsRoute = rootRoute.createRoute({
  path: 'posts',
  component: Posts,
})

const routes = [postsRoute]

export default routes
