import { useState } from 'react'
import './App.css'
import { Tutores } from './components/Tutores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tutores />
    </>
  )
}

export default App
