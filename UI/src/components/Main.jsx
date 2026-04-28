import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='flex-1 px-4 py-6'>
        <section className='max-w-4xl mx-auto rounded-xl border border-gray-400/40 bg-white/50 p-6'>
          <h2 className='text-2xl font-semibold'>Welcome</h2>
          <p className='mt-2 text-gray-700'>
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
            Analyze market trends and estimate future stock prices with machine-learning based predictions.
          </p>
        </section>
        <div className='flex justify-center mt-10'>
          <Button class='flex bottom-auto rounded-lg bg-green-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-green-500' text='Explore' url='/explore' />
        </div>
      </div>
    </>
  )
}

export default Main
