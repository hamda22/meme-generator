import React, { useEffect, useState } from 'react'

export default function MouseHook () {
    const [x,Setx]=useState(0)
    const [y,Sety]=useState(0)
    const logmousePostion = e=>{
        console.log('mouse event')
        Setx(e.clientX)
        Sety(e.clientY)
    }
    useEffect(() => {
       console.log(" mouse use Effect called  ")
       window.addEventListener('mousemove',logmousePostion)
},[])
    
  return (
    <div>Hooks X-{x} Y-{y} </div>
  )
}
