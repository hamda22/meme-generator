import React, { useState } from 'react'

export default function Test() {
    const [Count,setCount] = useState(0)
    function Add(){
         setCount(Count+5)

    }
    function Subtract(){
        setCount(Count -5)
    }
  return (
      <>
      <button onClick={Add}>|+</button>
      <div>{Count}</div>
      <button onClick={Subtract}>-</button>
      </>
  )
}


