import React from 'react'

const Header = () => {
  return (
    <header className='w-full border-b border-gray-400/40 bg-white/70 px-4 py-3 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3'>
        <div className='text-lg font-semibold text-gray-900 sm:text-xl'>
          Stock Price Prediction
        </div>

        <nav className='flex items-center gap-4 text-sm text-gray-700 sm:gap-6'>
          <a href='#' className='hover:text-gray-900 hover:underline'>
            Dashboard
          </a>
          <a href='#' className='hover:text-gray-900 hover:underline'>
            Predictions
          </a>
          <a href='#' className='hover:text-gray-900 hover:underline'>
            Insights
          </a>
        </nav>

        <div className='flex items-center gap-2'>
          <button className='rounded-lg border border-gray-400/60 px-4 py-1.5 text-sm font-medium text-gray-800 transition hover:bg-gray-100'>
            Login
          </button>
          <button className='rounded-lg bg-gray-900 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-gray-800'>
            Register
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
