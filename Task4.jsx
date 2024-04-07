import React from 'react'
import { useState } from 'react'

const Task4 = () => {
    let x=[{name:"abc"},
    {name:"abhi"},
    {name:"qwe"}
    ]

    let [employee]=useState(x)
    console.log(employee);
  return (
    <div>
        {
        employee.map((element)=>{
            return(
                <h1>{element.name}</h1>
            )
            })
        }
    </div>
  )
}

export default Task4