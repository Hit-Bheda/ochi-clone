import { IoIosArrowRoundUp } from "react-icons/io";
import './hero.scss'
import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";

function Hero() {
  const heroBox = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const curruntHeroBox = heroBox.current;
    if(curruntHeroBox){
      gsap.to(curruntHeroBox ,{
        width:'10vw',
        delay:2
      })
    }
  })
  return (
    <div className='hero'>
      <div className="hero-text">
        <div className="masker">
            <h1>WE CREATE</h1>
        </div>
        <div className="masker">
            <div className="hero-box" ref={heroBox}>
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
