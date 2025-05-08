import React from 'react'

const Greetings = ({IsLoggedIn}) => {
  return (
    <>
        {
            IsLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>

        }
    </>
  )
}

export default Greetings
