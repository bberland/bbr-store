import 'bootstrap/dist/css/bootstrap.min.css'
import { Home, News, Header, ItemListContainer, ItemDetailContainer, NotFound } from './components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContext } from './contexts/CartContext'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId)
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{
      cart, 
      addToCart,
      isInCart
    }}>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/:categoryId/products' element={<ItemListContainer />} />
            <Route path='/products/:productId' element={<ItemDetailContainer />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={ <Navigate to='/404' />} />
          </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
