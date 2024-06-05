import About from './Components/About'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import VideoSec from './Components/VideoSec'
import './Styles/style.scss'
function App() {
  return (
    <div className="main">
      <div className="home-page">
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
