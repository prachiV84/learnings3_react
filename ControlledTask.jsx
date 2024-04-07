import React, { useState } from 'react'

const ControlledTask = () => {
    let [num1,setNum1]=useState(0)
    let [num2,setNum2]=useState(0)
   
 let getNum1=(e)=>{
    setNum1(e.target.value)
  
}
 let getNum2=(e)=>{
      setNum2(e.target.value)

}
 let add=(e)=>{
    e.preventDefault()
    console.log(Number(num1)+Number(num2));
 }
 let sub=(e)=>{
    e.preventDefault()
    console.log(Number(num1)-Number(num2));
 }
 let mul=(e)=>{
    e.preventDefault()
    console.log(Number(num1)*Number(num2));
 }
 let div=(e)=>{
    e.preventDefault()
    console.log(Number(num1)/Number(num2));
 }

  return (
    <div>
        <form action="">
            <label htmlFor="">enter num1</label>
            <input type="text" value={num1} onChange={getNum1}/><br/>
            <label htmlFor="">enter num2</label>
            <input type="text" value={num2} onChange={getNum2}/><br/>

            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>
        </form>
    </div>
  )
  }

export default ControlledTask