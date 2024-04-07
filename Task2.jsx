import React, { useState } from 'react'

const Task2 = () => {
      
    let[data,setData]=useState(0)
    
    let x=()=>{
        setData(data+1)
    }
    let y=()=>{
        setData(data-1)
    }
    let z=()=>{
        setData(0)
    }
    
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={x}>Increment</button>
        <button onClick={y}>Decrement</button>
        <button onClick={z}>Reset</button>
    </div>
  )
}

export default Task2