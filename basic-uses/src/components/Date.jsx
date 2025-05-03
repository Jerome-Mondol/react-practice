import React from 'react'

const MyDate = () => {
    const time = new Date()
  return (
    <div>
        <p>{time.toLocaleString()}</p>
    </div>
  )
}

export default MyDate
