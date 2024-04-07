import React, { useState } from 'react'
import React, { useEffect } from 'react'
import axios from 'axios'

const Task5 = () => {
    
    let [id,setId]=useState("")
    let [data,setData]=useState([])
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{console.log(response.data); setData})
        .catch(()=>{console.log("error");})
    },[id])

   
       let getId=(e)=>{
        setId(e.target.value)
       }
  return (
    <div>
        <form action="">
       <input type="text" value={id} onChange={getId} />
              <button>submit</button>
        </form>
    </div>
  )
}

export default Task5