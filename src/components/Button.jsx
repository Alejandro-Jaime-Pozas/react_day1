// use rfc to get this template below
// useState - preserves the state of some element; allows us to use setCount fn
import React from 'react'

// exports the function as a default
export default function Button(props) {
    // this 
    // console.log('hello this is the button fn running')
    
  return (
    <button className={`btn btn-${props.color} w-100`} 
        // on onClick, you store the handleClick fn but do not call it, so that it may be used for later
        onClick={() => props.handleClick(props.step)}>+{props.step}
    </button> // the outer curly brackets for className are JSX expression to use with a normal js expression contained within ${}...
  )
}
