import React,{useEffect, useState} from 'react'
import './Home.css';
import logo from '../../img/logo.jpeg'
import { useSpring, animated } from 'react-spring'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopBar from '..//TopBar/TopBar';



function Home() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 150,
    onRest: () => set(!flip),
  })
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <div >
      <TopBar/>
      <div id = "home" className = 'container'>
        <div className='hello'>
          <h1 data-aos="fade-left">Reddlex</h1>
        </div>

        <div className="homeContent">
          <h1 data-aos="fade-left">Make Your Life Easier</h1>
          <p>Reddlex is a new startup founded in 2023, with the goal of creating innovative and user-friendly applications to make people's lives easier. We believe in utilizing the up to date technologies to simplify everyday tasks and improve overall efficiency. Our team is dedicated to delivering high-quality products that are designed with the user in mind. Join us on our mission to make life easier for everyone.</p>
        </div>

      </div>
    </div>
  )
}

export default Home
