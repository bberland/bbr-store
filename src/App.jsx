import 'bootstrap/dist/css/bootstrap.min.css'
import { Home, News, Header, ItemListContainer, ItemDetailContainer } from './components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/:categoryId/products' element={<ItemListContainer />} />
          <Route path='/products/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={ <Navigate to='/products' />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
