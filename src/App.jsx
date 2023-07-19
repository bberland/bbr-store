import 'bootstrap/dist/css/bootstrap.min.css'
import { Home, News, Header, ItemListContainer, ItemDetailContainer, NotFound } from './components'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
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
  )
}

export default App
