import React, { useEffect, useState } from 'react'

const Sideeffects = () => {
    let[count,setCount]=useState(0)
    let[count1,setCount1]=useState(0)

    /* useEffect(()=>{
        console.log("hi"); useeffect with no dependency
    }) */
    useEffect(()=>{
        console.log("hi");
    },[])//with empty dependency where the page will not be reloaded again and again.
    /* useEffect(()=>{
        console.log("hi");
    },[count]) *///with dependency where we can pass any number of dependency and will executed accordance to dependency.

    let incre=()=>{
        setCount(count+1)
    }
    let decre=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>useeffect</h1>

        <h1>count:{count}</h1>
        <button onClick={incre}>Increment</button>

        <h1>count:{count}</h1>
        <button onClick={decre}>Decrement</button>
    </div>
  )
}

export default Sideeffects