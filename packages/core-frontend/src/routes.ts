import { rootRoute } from 'frontend-routing'
import Components from './Components'
import Home from './Home'
import Settings from './Settings'

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Home,
})

const componentsRoute = rootRoute.createRoute({
  path: '/components',
  component: Components,
})

const settingsRoute = rootRoute.createRoute({
  path: '/settings',
  component: Settings,
})

const routes = [indexRoute, componentsRoute, settingsRoute]

export default routes
