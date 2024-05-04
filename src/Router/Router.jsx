import React from 'react'
import { Route , Routes , BrowserRouter } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import Login from '../Pages/Login'



export default function Router() {
    return (
      <>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
    
  )
}
  