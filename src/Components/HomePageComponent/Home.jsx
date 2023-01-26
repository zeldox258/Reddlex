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
      <div className = 'container'>
        <div className="homeContent">
          <img src={logo} alt={logo}/>

          <div className='hello'>
            <h1 data-aos="fade-left">Make Your Life Easier</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
