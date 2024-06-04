import About from './Components/About'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import VideoSec from './Components/VideoSec/VideoSec'
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
    </div>
  )
}

export default App
