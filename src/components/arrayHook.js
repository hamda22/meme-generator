import React, {  useEffect, useState,useRef } from 'react'

export default function ArrayHook() {
    const [arrays,Setarray]=useState([])
    const addItems = ()=>{
        Setarray([...arrays,{id: arrays.length,value:Math.floor(Math.random()*10)+1}] )
    }
    const[name ,Setname]=useState("hamda")
const namechange = ()=>{
  Setname(prompt("add your name"))
}
const b = useRef(true)

useEffect(()=>{
  
if (b.current){
b.current=false
  console.log("use effect has ran!!!!!")

  }
 
},[name]);
  return (
    <div>
        <button onClick={addItems}>Add A number</button>
        <ul>
            {arrays.map(array =>(<li key={array.id}>
                id ={array.id},

                value={array.value}</li>))}
    </ul>

    <button onClick={namechange}>change your name</button>
    <p>{name}</p>
    </div>
  )
}
