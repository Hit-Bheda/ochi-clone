// import React from 'react'
import Hero from './Components/Hero'
// import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import './Styles/style.scss'
function App() {
  return (
    <div className="main">
      <div className="home-page">
        <Navbar />
        <Hero />
      </div>
      {/* <Marquee /> */}
    </div>
  )
}

export default App
