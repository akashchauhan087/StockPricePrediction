import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full border-t border-gray-400/40 bg-white/70 px-4 py-5 mt-auto'>
      <div className='mx-auto flex max-w-6xl flex-col gap-4 text-sm text-gray-700 md:flex-row md:items-start md:justify-between'>
        <div>
          <h3 className='text-base font-semibold text-gray-900'>
            Stock Price Prediction
          </h3>
          <p className='mt-1 text-gray-600'>
            Predicting trends through data and machine learning.
          </p>
        </div>

        <div className='flex gap-10'>
          <div>
            <h4 className='font-semibold text-gray-900'>Quick Links</h4>
            <ul className='mt-1 space-y-1'>
              <li>
                <a href='#' className='hover:underline'>Home</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>About</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-gray-900'>Resources</h4>
            <ul className='mt-1 space-y-1'>
              <li>
                <a href='#' className='hover:underline'>Documentation</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>API</a>
              </li>
              <li>
                <a href='#' className='hover:underline'>Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='mx-auto mt-4 max-w-6xl border-t border-gray-400/30 pt-3 text-center text-xs text-gray-600'>
        {`© ${currentYear} Stock Price Prediction. All rights reserved.`}
      </div>
    </footer>
  )
}

export default Footer
