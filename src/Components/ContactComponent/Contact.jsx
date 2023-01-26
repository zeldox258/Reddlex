import React, { useEffect } from 'react'
import './Contact.css';
import logo from '../../img/logo.jpeg'
import { GoMail } from 'react-icons/go';
import { BsFillTelephoneFill ,BsGithub} from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';


import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div id= "contact" className='contactMe'>
      <h1 data-aos="fade-down">CONTACT US</h1>
      <div data-aos="zoom-out" className="contactcontent">

        <div className="resim" data-aos='fade-right'>
          <img src={logo} alt={logo}/>
        </div>

        <div className="contact">
            <div data-aos="fade-right" className='contactlink'><GoMail/><a rel="noreferrer noopener" target='_blank' href="mailto:reddlex@gmail.com"> reddlex@gmail.com</a></div>
            <div data-aos="fade-left" className='contactlink'><FaLinkedinIn/> <a rel="noreferrer noopener" target='_blank'href="https://www.linkedin.com/company/reddlexx">Linkedin:Reddlex</a></div>
            <div data-aos="fade-left" className='contactlink'><AiFillInstagram/> <a rel="noreferrer noopener" target='_blank'href="https://www.instagram.com/reddlexteam/">Instagram:ReddlexTeam</a></div>

        </div>
      </div>
    </div>
  )
}

export default Contact
