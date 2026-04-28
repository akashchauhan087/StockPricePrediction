import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from '../AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async(e) => {
    e.preventDefault();
    const userData = {username, password}
    try {
      setLoading(true)
      const response = await axios.post('http://127.0.0.1:8003/api/v1/token/', userData)
      if (response){
        localStorage.setItem('refreshToken', response.data.refresh)
        localStorage.setItem('accessToken', response.data.access)
        setIsLoggedIn(true)
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.detail != null) {
        const d = error.response.data.detail;
        setError(typeof d === 'string' ? d : JSON.stringify(d));
      } else if (!error.response) {
        setError('Cannot reach server. Check API URL and CORS.');
      } else {
        setError(error.message || 'Login failed');
      }
    } finally {
      setUsername('')
      setPassword('')
      setLoading(false)
    }
  }
  return (
    <div className="py-10 flex items-center justify-center bg-linear-to-br from-green-500 via-green-100 to-green-500 ">
      <form
        className="w-full max-w-md py-8 px-6 bg-white rounded-3xl shadow-2xl flex flex-col gap-6 border border-green-200 animate-fade-in"
        onSubmit={handleLogin}
      >
        <h2 className="text-3xl font-extrabold text-green-700 mb-2">Login</h2>
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
        </div>
        {error && <div className="text-red-500">{error}</div>}
        {loading ?
          <button
            type="submit"
            className="mt-2 bg-linear-to-r from-sky-200 via-green-400 to-sky-600 text-white font-bold py-2 px-8 rounded-xl shadow hover:from-green-500 hover:to-green-700 transition-all duration-200 text-lg"
          >
            Processing...
          </button>
        :
          <button
            type="submit"
            className="mt-2 bg-linear-to-r from-sky-200 via-green-400 to-sky-600 text-white font-bold py-2 px-8 rounded-xl shadow hover:from-green-500 hover:to-green-700 transition-all duration-200 text-lg"
          >
            Login
          </button>
        }
      </form>
    </div>
  )
}

export default Login
