import { useState } from 'react'


import './App.css'
import TestReact from './components/testReact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <TestReact/>
    </>
  )
}

export default App
