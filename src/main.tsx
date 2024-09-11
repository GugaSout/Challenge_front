import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'

const router = createBrowserRouter([
  {
  path:'/',
  element: <App />,
  errorElement:<Error/>,
  children: [
    {
    path: '/',
    element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    }
  ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
