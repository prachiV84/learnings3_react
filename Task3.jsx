import React, { useState } from 'react'

const Task3 = () => {
    let [like,setLike]=useState(0)

    let x=()=>{
        setLike(like+1)
    }
  return (
    <div>
        
        <button onClick={x}>❤️</button>
        <sup>{like}</sup>
    </div>
  )
}

export default Task3