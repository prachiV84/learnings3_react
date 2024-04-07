import React from 'react'

const FetchData2 = () => {
  return (
    <div>
        {postMessage.map((Element,index)=>{
            console.log(index);
            return(
                {/* <div key={Element,index}> */}
                    
               /*  </div> */
            )
        })}
    </div>
  )
}

export default FetchData2