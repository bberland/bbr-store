import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div data-bs-theme="dark">
      <NavBar />
      <br />
      <ItemListContainer greeting={'Bienvenido a mi tienda'}/>
    </div>
  )
}

export default App
