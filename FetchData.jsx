import React from 'react'
import userContent from "./userdata.json"

const FetchData = () => {
  return (
    <div>
      <h1>FetchData</h1>
      {userContent.map((Element)=>{
        return(
            <div>
                <h1>ID:{Element.id}</h1>
                <h1>Login:{Element.login}</h1>
                <img src={Element.avatar_url} />
            </div>
        )
      })}
    </div>
  )
}

export default FetchData