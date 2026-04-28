import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Explore = () => {
  const token = localStorage.getItem('accessToken')
  console.log('token', token)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8003/api/v1/protected-view/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        if (response) {
          console.log(response.data)
        }
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='flex-1 px-4 py-6'>Authorised users only</div>
  )
}

export default Explore