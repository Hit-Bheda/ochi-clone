import { useEffect, useRef } from 'react'
import About from './Components/About'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import VideoSec from './Components/VideoSec'
import './Styles/style.scss'
import { gsap } from 'gsap/gsap-core'
function App() {
  const homePage = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const curruntHomePage = homePage.current;
    if(curruntHomePage){
      gsap.to(curruntHomePage ,{
        opacity:1,
        delay:2,
      })
    }
  })
  return (
    <div className="main">
      <div className="home-page" ref={homePage}>
        <Navbar />
        <Hero />
      </div>
      <Marquee />
      <About />
      <VideoSec />
      <Projects />
    </div>
  )
}

export default App
