import React from 'react'
import './Hero.css'
import man from '../../images/symbol-male-user-icon-circle-profile-icon-vector-illustration_276184-154.avif'
import '../../App.css'
import 'animate.css'
import { LuDownload } from "react-icons/lu";
import toast from 'react-hot-toast';

const Hero = () => {

    const btnResumeDownload = () => {
        toast.loading('Downloading..')
    }
    

return (
    <section className='Hero-Container' id='home'>
        <div className="hero">
            <img src={man} alt="" className='animate__animated animate__fadeIn'/>
            <h1 className='animate__animated animate__fadeInUp'>👋 I'm <span>Nawaf Rayhan</span>, Fullstack Website Developer In Bangladesh.</h1>
            <p className='animate__animated animate__fadeInUp'>Fullstack Developer specializing in JavaScript and React, building responsive and user-friendly web applications. Experienced with MERN stack and both MongoDB and SQL databases. Expanding backend skills for full-stack development. Ready to help.</p>
            <div className="hero-action">
                <div className="hero-connect animate__animated animate__fadeInUp">Connect With Me</div>
                <div className="hero-resume animate__animated animate__fadeInUp" onClick={btnResumeDownload}>Resume   <LuDownload className='icon'/></div>
            </div>
        </div>
    </section>
)
}

export default Hero