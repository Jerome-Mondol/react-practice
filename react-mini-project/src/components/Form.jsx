import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const [submittedData, setSubmittedData] = useState({
        name: "",
        email: ""
    })

    const handelChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        setSubmittedData(formData)
    }

  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-slate-300">
            <div className="w-full max-w-92 bg-white rounded-lg shadow-sm p-10">
                <h1 className="text-2xl font-bold text-gray-800 text-center" >React Form</h1>
                <form onSubmit={handelSubmit} >
                    <div>
                        <input onChange={handelChange} className="w-full border-2 border-gray-500 rounded-small p-2 mt-3" type="text" placeholder="Enter you'r name" name="name" value={formData.name}/>
                        <input onChange={handelChange} className="w-full border-2 border-gray-500 rounded-small p-2 mt-3" type="email" placeholder="Enter you'r email please" name="email" value={formData.email}/>
                    </div>

                    <button type='submit' className="w-full bg-indigo-500 mt-5 rounded-sm text-md font-semibold py-2 cursor-pointer">Login</button>
                </form>

                <div className="mt-3" >
                    <h2 className="text-center" >User Info</h2>
                    <p className="text-gray-300" >Name: {submittedData.name}</p>
                    <p className="text-gray-300" >Email: {submittedData.email}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Form
