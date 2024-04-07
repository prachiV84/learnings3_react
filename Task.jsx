import React from 'react'

const Task = (props) => {
    console.log(props);
    console.log(props.data);

  return (
    <div>
        <h1>Developers Name:{props.data}</h1>
    </div>
  )
}

export default Task