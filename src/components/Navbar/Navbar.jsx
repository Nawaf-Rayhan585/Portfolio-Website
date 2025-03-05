import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import MobileNav from './MobileNav/MobileNav';
import toast from 'react-hot-toast';

const Navbar = () => {

  const [openMenu , setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  
  const btnResumeDownload = () => {
    toast.loading('Downloading..')
}


  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />


      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className='logo'>Portfolio.</h1>
          <ul>
            <li>
              <a className='menu-item' href="#home">Home</a>
            </li>
            <li>
              <a className='menu-item' href="#about">About</a>
            </li>
            <li>
              <a className='menu-item' href="#skills">Skills</a>
            </li>
            <li>
              <a className='menu-item' href='#projects'>Projects</a>
            </li>
            <li>
              <a className='menu-item-last' href="#contact">Contact Me</a>
            </li>
            <button className='contact-btn' onClick={btnResumeDownload}>
              Resume <LuDownload className='icon'/>
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className={'material-symbols-outlined'} style={{fontSize:'1.8rem'}}>
            {openMenu ? <RiCloseLargeFill /> : <FaBars />}
            </span>
          </button>

        </div>
      </nav>
    </>
  )
}

export default Navbar
