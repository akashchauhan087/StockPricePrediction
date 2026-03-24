import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const handleRegistration = async(e) => {
    e.preventDefault();
    const userData = {username, email, password}    
    try {
      const response = await axios.post('http://127.0.0.1:8003/api/v1/register/', userData)
      setSuccess(true)
      setUsername('')
      setEmail('')
      setPassword('')
      setErrors({})
    } catch (error) {
      setErrors(error.response.data)
      console.error('Error registering user:', error)
    }

  }

  return (
    <div className="py-10 flex items-center justify-center bg-gradient-to-br from-green-500 via-green-100 to-green-500 ">
      <form 
        className="w-full max-w-md py-8 px-6 bg-white rounded-3xl shadow-2xl flex flex-col gap-6 border border-green-200 animate-fade-in"
        onSubmit={handleRegistration}
      >
        <h2 className="text-3xl font-extrabold text-green-700 mb-2">Sign Up</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-green-900 font-semibold">Username</label>
          <input
            className="rounded-xl border border-green-300 px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            type="text"
            id="username"
            placeholder="Enter username"
            autoComplete="username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-green-900 font-semibold">Email</label>
          <input
            className="rounded-xl border border-green-300 px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            type="email"
            id="email"
            placeholder="Enter email"
            autoComplete="email"
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-green-900 font-semibold">Password</label>
          <input
            className="rounded-xl border border-green-300 px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            type="password"
            id="password"
            placeholder="Enter password"
            autoComplete="new-password"
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        {success && <p className="text-green-500 text-sm">Registration Completed!!!</p>}
        <button
          type="submit"
          className="mt-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-8 rounded-xl shadow hover:from-green-500 hover:to-green-700 transition-all duration-200 text-lg"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
