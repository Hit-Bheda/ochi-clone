import { useEffect, useRef } from 'react'
import About from './Components/About'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import VideoSec from './Components/VideoSec'
import './Styles/style.scss'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger} from 'gsap/all';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother)
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
    ScrollSmoother.create({
      wrapper: '.main',
      content: '.scroller',
      smooth:2,
      smoothTouch:1
    })
    
  })
  return (
    <div className="main">
      <div className="scroller">
      <div className="home-page" ref={homePage}>
        <Navbar />
        <Hero />
      </div>
      <Marquee />
      <About />
      <VideoSec />
      <Projects />
      </div>
    </div>
  )
}

export default App
