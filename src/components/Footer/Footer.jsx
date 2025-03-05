import React from 'react';
import './Footer.css';
import { LuDownload } from "react-icons/lu";

import github from '../../images/png-clipart-github-pages-logo-repository-fork-github-mammal-cat-like-mammal-thumbnail-removebg-preview (1).png';
import fiverr from '../../images/fiverr-new3326.jpg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="nav-content-main">
        <ul className="footer-menu">
          <li><a className='menu-item-footer' href="#home">Home</a></li>
          <li><a className='menu-item-footer' href="#about">About</a></li>
          <li><a className='menu-item-footer' href="#skills">Skills</a></li>
          <li><a className='menu-item-footer' href='#projects'>Projects</a></li>
          <li><a className='menu-item-last-footer' href="#contact">Contact Me</a></li>
        </ul>
        <button className='contact-btn-footer'>
          Resume <LuDownload className='icon-footer-btn'/>
        </button>
      </div>
      
      <div className="content">
        <p className='details-p'>© 2024 Nawaf Rayhan, All Rights Reserved</p>
        <div className="content-icons">
          <a href="https://github.com/Nawaf-Rayhan585" target="_blank" rel="noopener noreferrer">
            <img className='icon-footer' src={github} alt="GitHub" />
          </a>
          <a href="https://www.fiverr.com/s/KeWL7D8" target="_blank" rel="noopener noreferrer">
            <img className='icon-fiverr icon-footer' src={fiverr} alt="Fiverr" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
