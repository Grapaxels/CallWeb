import React from 'react'
import { Route , Routes , BrowserRouter } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Calls from '../Pages/Calls'
import Groups from '../Pages/Groups'
import Stories from '../Pages/Stories'



export default function Router() {
    return (
      <>
      <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Calls' element={<Calls />} />
        <Route path='/Groups' element={<Groups />} />
        <Route path='/Stories' element={<Stories />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
    
  )
}
  