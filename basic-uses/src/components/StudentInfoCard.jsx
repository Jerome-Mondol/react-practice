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
                        {student.EnrolledCourses.map((course) => (
                            <div className="courses" key={student.id}>
                                <h1>Enrolled Courses:</h1>
                                <h1 className="course">Course Name: {course.courseName}</h1>
                                <p className="course">Course Duration: {course.courseDuration}</p>
                            </div>
                        ))}

                </div>
            ))}
        </div>
    </>
  )
}

export default StudentInfoCard
