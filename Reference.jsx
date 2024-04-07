import React from 'react'
import { useState } from 'react';

const Reference = () => {
    let demoRef=useRef()
    console.log(demoRef);//{current:ud}

    let chgcolor=()=>{
        demoRef.current.style.backgroundColor="red"
    }
  return (
    <div>
        <h1>REFERENCE</h1>
        <button onClick={chgcolor}>changeColor</button>
    </div>
  )
}

export default Reference