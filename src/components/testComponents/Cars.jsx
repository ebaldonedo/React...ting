import React, { useEffect, useState } from 'react'

export default function Cars() {

//3.-Add to useState
    const [car, setcar] = useState([{
        model: 'Nissan',
        year: 2007
    }])

    useEffect(() => {
        console.log(car);
    }, [car])
const addCar = () => {
        let newcar = { model: 'neon', year: 2001 }
        setcar([...car, newcar]);
    }
    return (
        <div>
            
            <button onClick={addCar}>New Car</button>
            <h3>My Cars:</h3>
            {car.map((car, index) => (
                <div key={index}>
                    <h5>Model: {car.model}, Year: {car.year}</h5>

                </div>
            ))}



        </div>
    )
}
