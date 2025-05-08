import React, { useState } from 'react'
import Greetings from './Greetings';

const Login = () => {

    const [IsLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
        <Greetings IsLoggedIn={IsLoggedIn} />
        <button onClick={() => setIsLoggedIn(!IsLoggedIn)}>
            {IsLoggedIn ? "Logout" : "Login"}
        </button>

    </>
  )
}

export default Login
