import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home, Admin, Employee, Tasks} from './pages/index.js'
import { Provider } from 'react-redux'
import store from './Store/Store.js'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path: '/admin-dashboard',
        element: <Admin />
      },
      {
        path: '/employee-dashboard',
        element: <Employee />
      },
      {
        path: '/tasklist',
        element: <Tasks />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} /> 
    </Provider>
  </StrictMode>,
)
