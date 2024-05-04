import React from 'react'
import login from '../assets/login.png'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    
    <header className='header'>
        <img className='logo' src={logo} alt='logo'/>
        <h1 className='we'>Call<span className='call'>Web</span></h1>
        <Link to='/login'><img src={login} className='login' alt='login'/></Link>
        <Link to={'/Menu'}><img className='menu' src={menu} alt='menu'/></Link>              

    </header>
    </>
  )
}
