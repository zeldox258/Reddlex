import React,{useEffect, useState} from 'react'
import './Home.css';
import { useSpring, animated } from 'react-spring'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopBar from '..//TopBar/TopBar';
import logo from '../../img/logo.jpeg'



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
      <div id = "home" className = 'Homecontainer'>
        
      

        <div className="homeContent">
          <h1 className='headerText' data-aos="fade-left">Reddlex</h1>
          <h1 className='slogan' data-aos="fade-left">Make Your Life Easier</h1>
        </div>

      </div>
    </div>
  )
}

export default Home
/*  <div className='hello'>
         <img src={logo} alt={logo}/>
        </div> */