import React from 'react'

const PropsObj = (props) => {
    console.log(props);
    console.log(props.data);
    console.log(props.data[0].address.city);
  return (
    <div>
        <h1>{props.data[0].address.city}</h1>
    </div>
  )
}

export default PropsObj