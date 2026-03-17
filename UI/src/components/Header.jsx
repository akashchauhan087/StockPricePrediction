import React from 'react'

const Header = () => {
  return (
    <div className='h-10 w-full px-4 flex justify-between text-xl'>
      <div className='w-1/2'>Stock Price Prediction</div>
      <div className='w-1/2 flex justify-end gap-3'>
        <button className='m-1 px-3 border-2 rounded-xl '>Login</button>
        <button className='m-1 px-3 border-2 rounded-xl '>Register</button>
      </div>
    </div>
  )
}

export default Header
