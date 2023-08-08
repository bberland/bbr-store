import 'bootstrap/dist/css/bootstrap.min.css'
import { Home, News, Header, ItemListContainer, ItemDetailContainer, CartDetail, NotFound } from './components'
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import { CartContext, CartContextProvider } from './contexts/CartContext'
import { useState } from 'react'

function App() {

  return (
    <CartContextProvider>
      <HashRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/:categoryId/products' element={<ItemListContainer />} />
            <Route path='/products/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartDetail />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={ <Navigate to='/404' />} />
          </Routes>
      </HashRouter>
    </CartContextProvider>
  )
}

export default App
