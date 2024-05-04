import React from 'react'
import { Link } from 'react-router-dom'
import { PiChats } from "react-icons/pi";
import { MdGroups3 } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { VscPlayCircle } from "react-icons/vsc";

export default function Navbar() {
  return (
    <>
    <nav>
    <ul className='navbar'>
      <li><Link to={'/'} className='link-a'><PiChats className='chats' /></Link></li>
      <li><Link to={'/Groups'} className='link-a'><MdGroups3 className='chats' /></Link></li>
      <li><Link to={'/Calls'} className='link-b'><IoCallSharp className='chats' /></Link></li>
      <li><Link to={'/Stories'} className='link-c'><VscPlayCircle className='chats' /></Link></li>
     </ul>
    </nav>
     
    </>
  )
}
