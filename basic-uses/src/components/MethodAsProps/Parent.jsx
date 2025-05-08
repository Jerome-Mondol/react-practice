import React from 'react'
import Child from './Child'

const Parent = () => {

    const MyParent = () => {
        alert("You have clicked a button")
    }

  return (
    <div>
        <h1>Parent</h1>
        <Child MyFunc={MyParent} />
    </div>
  )
}

export default Parent
