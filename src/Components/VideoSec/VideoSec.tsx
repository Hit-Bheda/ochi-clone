import { useEffect, useState } from 'react';
import './videosec.scss'

function VideoSec() {
    const [angle,setAngle] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove" , (e) =>{
            const mouseX: number = e.clientX;
            const mouseY: number = e.clientY;

            const deltaX: number = mouseX - window.innerWidth/2;
            const deltaY: number = mouseY - window.innerHeight/2;

            const rotate: number = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setAngle(rotate -180);
        })
    })
  return (
    <div className='VideoSec'>
      <div className="eyes-container">
        <div className="eyes">
          <div className="eye-inner">
            <div className="line" style={{rotate:`${angle}deg`}}>
                <div className="pupil"></div>
            </div>
          </div>
        </div>

        <div className="eyes">
          <div className="eye-inner">
            <div className="line" style={{ rotate:`${angle}deg`}}>
                <div className="pupil"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSec;
