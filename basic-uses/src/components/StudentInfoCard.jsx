import React from 'react'
import StudentData from '.././data/StudentData.json'

const StudentInfoCard = () => {
  return (
    <>
        <div className="card">
            {StudentData.map((student) => (
                <div className="card-body" key={student.id}>
                    <h5 className="card-title">{student.name}</h5>
                    <p className="card-text">Age: {student.age}</p>
                    <p className="" >Number: {student.number}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default StudentInfoCard
