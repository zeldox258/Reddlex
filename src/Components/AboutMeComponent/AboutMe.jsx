import React,{ useEffect } from 'react'
import './AboutMe.css';
import foto from '../../img/img.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Eğitim() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

const omerLinkedin=() =>{
// eslint-disable-next-line no-restricted-globals
  location.href="https://www.linkedin.com/in/huseyinomerguray/";
}
const omerTwitter=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://mobile.twitter.com/hsynmrgry";
}
const omerInstagram=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://www.instagram.com/huseyinomerguray/";
}
const omerGithub=() =>{
  // eslint-disable-next-line no-restricted-globals
    location.href="https://github.com/zeldox258";
}
  return (
    <div className='center'>
    <div className="resim">
      <img src={foto} alt={foto}/>
    </div>



        <div className="aboutMe" data-aos='fade-left'>
           <h1 data-aos="fade-down" >Co-Founder</h1>
           <h2 data-aos="fade-right">FullStack Developer</h2>
           <div className="button">
               <button onClick={omerLinkedin} data-aos='flip-right'>Linkedin</button>
               <button onClick={omerGithub} data-aos="zoom-out">GitHub</button>
               <button onClick={omerInstagram} data-aos='flip-left'>Instagram</button>
               <button onClick={omerTwitter} data-aos='flip-left'>Twitter</button>

           </div>
       </div>

    </div>
  )
}

export default Eğitim
