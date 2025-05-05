import React, { useState } from 'react'

const Event = () => {
        const [message, setMessage] = useState("Click the button");

        const HandelClick = () => {
            setMessage("Button Clicked");
        }
  return (
    <>
        <h3>{message}</h3>
        <button onClick={HandelClick} >Click me</button>
    </>
  )
}

export default Event
