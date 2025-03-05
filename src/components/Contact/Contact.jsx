import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import github_icon from '../../images/png-clipart-github-pages-logo-repository-fork-github-mammal-cat-like-mammal-thumbnail-removebg-preview (1).png'
import email_icon from '../../images/lovepik-envelope-linear-icon-png-image_400283670_wh1200-removebg-preview.png'
import ContactFrom from './ContactFrom/ContactFrom'

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <h5>Find Me</h5>

      <div className="contact-content">
        <div className="block" style={{flex: 1}}>
          <ContactInfoCard
            icon={email_icon}  
            text='fayaz7rg@gmail.com'
          />
          <ContactInfoCard
            icon={github_icon}
            text='https://github.com/Nawaf-Rayhan585'
          />
        </div>
        <div style={{flex: 1}}>
          <ContactFrom/>
        </div>
      </div>
    </section>
  )
}

export default Contact