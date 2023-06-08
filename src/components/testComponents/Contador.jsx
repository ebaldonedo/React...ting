import React, { useState } from 'react'

function Contador() {
    
//1.-Variables dinamicas con hooks
    const [contador,setContador]=useState(0)
    const sumar = ()=>{
        setContador(contador+1)
    }
    const restar = ()=>{
        setContador(contador-1)
    }
  return (
    <div>
        <h3>Counter</h3>
    <h5>Contador {contador}</h5>
    <button onClick={sumar} >Sumar</button>
    <button onClick={restar}>Restar</button>

    </div>
  )
}

export default Contador