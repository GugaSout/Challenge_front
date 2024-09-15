import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Veiculos from './routes/Veiculos/index.tsx'

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
    },
    {
      path: '/Cadastro',
      element:<Cadastro/>
    },
    {
      path: '/Sobre',
      element:<Sobre/>
    },
    {
      path: '/Veiculos',
      element:<Veiculos/>
    }
  ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
