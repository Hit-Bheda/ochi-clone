import { IoIosArrowRoundUp } from "react-icons/io";
import './hero.scss'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-text">
        <div className="masker">
            <h1>WE CREATE</h1>
        </div>
        <div className="masker">
            <div className="hero-box">
            </div>
            <h1>EYE-OPENING</h1>
        </div>
        <div className="masker">
            <h1>PRESENTATIONS</h1>
        </div>
      </div>
      <hr />
      <div className="hero-btm">
        <div className="btm-left">
          <p>For public and private companies</p>
        </div>
        <div className="btm-center">
          <p>From the first pitch to IPO</p>
        </div>
        <div className="btm-right">
          <button>START THE PROJECT</button>
          <div className="arrow">
            <IoIosArrowRoundUp size={'1.5rem'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
