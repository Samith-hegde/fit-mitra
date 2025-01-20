import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

const Router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>,
)
