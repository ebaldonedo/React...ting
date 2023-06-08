import { useState } from 'react'


import './App.css'
import TestReact from './components/testReact'
import Poke from './components/Poke'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Reacting!</h1>

    <Poke/>
      
      
    </>
  )
}

export default App
