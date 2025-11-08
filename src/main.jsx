import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './Components/Router.jsx'
import ContexProvider from './Components/Context/ContexProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContexProvider>
      <RouterProvider router={Router}></RouterProvider>
    </ContexProvider>

  </StrictMode>,
)
