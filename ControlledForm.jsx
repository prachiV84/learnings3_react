import React, { useState } from 'react'

const ControlledForm = () => {
    let [name,setName]=useState("")
    let[company,setCompany]=useState("")

    let getName=(e)=>{
        setName(e.target.value)
    }
    let getCompany=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        console.log(name,company);
    }
  return (
    <div>
        <form action="">
              <label htmlFor="">name</label>
              <input type="text" value={name} onChange={getName}/>
              <label htmlFor="">company</label>
              <input type="text" value={company} onChange={getCompany}/>
              <button onClick={formHandle}>submit</button>

        </form>
    </div>
  )
}

export default ControlledForm