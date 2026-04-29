import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Explore = () => {
  const [userName, setUserName] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const token = localStorage.getItem('accessToken')?.trim()
  if (!token) {
    console.log('No token found');
    return;
  }
  console.log('token', token)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8003/api/v1/protected-view/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        if (response) {
          console.log(response.data)
          setUserName(response.data.user)
          setUserMessage(response.data.message)
        }
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='flex-1 px-4 py-6'>
        <div className='text-2xl font-semibold'>Welcome, {userName}!</div>
        <div className='text-lg'>{userMessage}</div>
      </div>
    </>
  )
}

export default Explore