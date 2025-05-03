import React, { useState } from 'react'

const MyState = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)} >Increase Count</button>
    </div>

  )
}

export default MyState
