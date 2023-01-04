import React, { useEffect } from 'react'
import './Skills.css';
import go from '../../logo/go.webp'
import native from '../../logo/native.png'
import node from '../../logo/node.png'
import react from '../../logo/react.png'

import AOS from 'aos'
import 'aos/dist/aos.css'




function Skills() {
    useEffect(()=>{
        AOS.init({duration:2000})
      },[])
  return (
    <div className="container-skills">
        <h1 data-aos="fade-down">OUR TECHSTACK</h1>
       <div className="yetenek_card">

        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={react} alt="react" />
            <h4>REACT.JS</h4>
        </div>
        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={node} alt="react" />
            <h4>Node.JS</h4>
        </div>
        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={go} alt="react" />
            <h4>GO</h4>
        </div>
        <div className="skillCard" data-aos="fade-left" data-aos-easing="linear">
            <img src={native} alt="react" />
            <h4>REACT NATIVE</h4>
        </div>


       </div>
    </div>
  )
}

export default Skills
