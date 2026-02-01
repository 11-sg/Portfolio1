import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'

const router=createBrowserRouter([ {
  path: '/',
  element: <App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"project",
      element:<Project/>
    },
    {
      path:"contact",
      element:<Contact/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
