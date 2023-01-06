import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createReactRouter, RouterProvider } from '@tanstack/react-router'
import { httpLink } from '@trpc/client'
import { routes as coreRoutes } from 'core-frontend'
import { rootRoute } from 'frontend-routing'
import { trpc } from 'frontend-trpc'
import { routes as postRoutes } from 'post-frontend'
import { useState } from 'react'
import { ThemeProvider } from 'ui'
import { routes as userRoutes } from 'user-frontend'

const routeConfig = rootRoute.addChildren([
  ...coreRoutes,
  ...userRoutes,
  ...postRoutes,
])

const router = createReactRouter({ routeConfig })

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  )
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpLink({
          url: '/api/trpc',
        }),
      ],
    }),
  )

  return (
    <ThemeProvider>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </trpc.Provider>
    </ThemeProvider>
  )
}

export default App
