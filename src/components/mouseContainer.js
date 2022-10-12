import React, {useState}from 'react'
import MouseHook from './mouseHook'

function MouseContainer() {
    const [display,setDisplay]=useState()
//     useEffect(()=>{
// console.log("display toggled ");
//     },[])
  return (
      <div><button onClick={()=> setDisplay(!display)}>toggle display</button>
      {display && <MouseHook/>}
</div>
  )
}

export default MouseContainer