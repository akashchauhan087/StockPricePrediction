import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-300 flex flex-col'>
      <Header />
      <Main />
      <Register />
      <Login />
      <Footer />
    </div>
  )
}

export default App
