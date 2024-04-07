import React from 'react'

const StatesWhy = () => {
    let greet="hiii"

    let changeData=()=>{
       greet="hello"
       console.log(greet);

       let headingTags=document.querySelector("h1")
       headingTags.forEach((x) => {
        x.innerText=greet
       });
    }
  return (
    <div>
       <h1>{greet}</h1>
       <h1>{greet}</h1>
       <h1>{greet}</h1>
       <button onClick={changeData}>click</button>
    </div>
  )
}

export default StatesWhy
