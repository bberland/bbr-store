import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const routes = [
  {
    path: "/*",
    element: <App />,
  }
]

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/bbr-store/' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
