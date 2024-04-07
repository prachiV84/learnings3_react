import React, { useState } from 'react'

const States = () => {
    let[data,setData]=useState("hii")
    let x=()=>{setData("hello")}
      return (
    <div>
      <h1>{data}</h1>
      <button onClick={x}>Greet</button>
    </div>
  )
}

export default States