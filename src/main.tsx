import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './App'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import CartProvider from './context/cartContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
