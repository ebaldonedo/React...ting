import React, { useState } from 'react'
import Contador from './testComponents/Contador';
import Fruits from './testComponents/Fruits';
import Cars from './testComponents/Cars';

export default function TestReact() {
//Variables
console.log('render');
 
  return (
    <div>
        <h2>Test React</h2>

        <Contador/>
        <hr />
        <Fruits/>
        <hr />
        <Cars/>

    
    </div>
  )
}
