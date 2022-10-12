import React, { useState } from 'react'

export default function ObjectHook() {
    const [name,Setname]=useState({firstname:'',lastname:''})

  return (
    <div>
        <form action="">
        <input type="text" value={name.firstname}onChange={e=>Setname({...name,firstname:e.target.value})}/>
        <input type="text" value={name.lastname}onChange={e=>Setname({...name,lastname:e.target.value})}/>
        <h2>your firstname is - {name.firstname}</h2>
        <h2>your lastname is - {name.lastname}</h2>
        
        </form>
    </div>
  )
}
