import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthProvider from './AuthProvider'
import Explore from './components/Explore'

const App = () => {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <div className='min-h-screen w-full bg-gray-300 flex flex-col'>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/explore' element={<Explore />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
