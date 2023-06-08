import React, { useState } from 'react'

export default function Fruits() {
    

//2.-Add variable to an array

const [fruit, setfruit] = useState(['apple'])



const addFruit= ()=>{
    setfruit([...fruit,'pear'])
    
}    
    return (
        <div>

            <h3>Add fruit</h3>

            <p>FRUITS:[ {fruit.map((fruit, index) => (
                fruit + ', '
            ))}
                ]
            </p>
            <ul>

                {fruit.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <button onClick={addFruit}>Add</button>

        </div>
    )
}
