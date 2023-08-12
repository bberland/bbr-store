import 'bootstrap/dist/css/bootstrap.min.css'
import { Home, News, Header, ItemListContainer, ItemDetailContainer, CartDetail, NotFound, Checkout, OrderDetail } from './components'
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'

function App() {

  return (
    <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/:categoryId/products' element={<ItemListContainer />} />
          <Route path='/products/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orders/:orderId' element={<OrderDetail />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={ <Navigate to='/404' />} />
        </Routes>
    </CartContextProvider>
  )
}

export default App
