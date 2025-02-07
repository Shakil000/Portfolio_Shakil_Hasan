import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './components/Routes/Router/Router.jsx'
import { ThemeProvider } from './components/Provider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
   <RouterProvider router={Router}></RouterProvider>
   </ThemeProvider>
  </StrictMode>,
)
