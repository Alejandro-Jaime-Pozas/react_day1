import React from 'react'
import Button from "./Button";
import { useState } from 'react';


export default function ButtonCounter() {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ]

    // Set a state for count - initial state of 0 and setCount is function to change state value of count
    // USE STATE CAUSES A RE-RENDERING OF THE WEBSITE/DATA
    const [count, setCount] = useState(0);
    // Set a state for names - initial state of [] and setRacers is function to change state value of names
    // Function to be executed when a button is clicked
    function handleClick(step){
        console.log('Clicked');
        setCount(count + step);
    };

    return (
        <>
            <h1 className='text-center'>Hello World</h1>
            <h3 className='text-center'>Total: {count}</h3>
            {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} handleClick={handleClick} />)}
        
        </>
  )
}
