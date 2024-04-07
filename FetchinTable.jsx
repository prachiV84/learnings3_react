import React from 'react'
import userContent from "./userdata.json"
import { useState } from 'react'
import style from './fetchData.module.css'

const FetchinTable = () => {
  return (
    <div>
        {/* {<table border={1} cellPadding={5} cellSpacing={2}>}
            <th>ID</th>
            <th>NODE_ID</th>
            <th>LOGIN</th>
            <th>PICTURE</th>
        */}
        {
        userContent.map((element)=>{
          
          let sentRequest=()=>{
            /* console.log(e);
            e.target.innerText="Cancel"
            alert(`friend request sent to ${element.login}`) */
            
             let x=document.getElementById(element.id)
              if(x.innerText=="Add"){
              alert(`friend request sent to ${element.login}`)
              x.innerText="Cancel"
             }else{
              x.innerText="Add"
             } 
          }
            
          let sendMessage =()=>{
            let message=prompt("enter message")
            console.log(message,element.login);
          }
          
            return(
              < div class="container">
               
                {/* <td>{element.id}</td>
                <td>{element.node_id}</td> */}
                {/* <li>{element.login}</li> */}
               
                    <li><img src={element.avatar_url} height={100} width={100}/></li>
                
                <li>{element.login}</li>
                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laboriosam!</p></li>
                <li><button onClick={sentRequest} id={element.id} >Add</button>
                <button onClick={sendMessage}>Remove</button></li>
               
               </div>
            )
            })
        }
         {/* </table> */}
    </div>
  )
}

export default FetchinTable