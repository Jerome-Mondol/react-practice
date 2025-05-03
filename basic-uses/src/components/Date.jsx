import React from 'react'

const MyDate = () => {
    let time = new Date()
  return (
    <div>
        <p>Date: {time.getDate()}</p>
        <p>Month: {time.getMonth() + 1}</p>
        <p>Year: {time.getFullYear()}</p>
        <p>Full date and time: {time.toLocaleString()}</p>
    </div>
  )
}

export default MyDate
