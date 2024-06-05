import Card from './Card';
import './projects.scss';
import img4 from '../../assets/PB-Front-4-663x551.png';
import img3 from '../../assets/Frame-3875-663x551.jpg';
import img1 from '../../assets/Fyde_Illustration_Crypto_2-663x551.png';
import img2 from '../../assets/Vise_front2-663x551.jpg';


function Projects() {
  return (
    <div className='projects'>
      <div className="projects-heading">
        <h1>Featured projects</h1>
      </div>
      <div className="project-cards">
        <Card heading='FYDE' backgroundColor='#CCCCCD' tag={['AUDIT','COPYWRITING','SALES DECK','SLIDES DESIGN']} backgroundImage={img1}/>
        <Card heading='VICE'backgroundColor='#19181E' tag={['AGENCY','COMPANY PRESENTATION']} backgroundImage={img2}/>
        <Card heading='TRAWA' backgroundColor='#CCCCCD' tag={['BRAND IDENTITY','DESIGN RESEARCH','INVESTOR DECK']} backgroundImage={img3}/>
        <Card heading='PREMIUM BLEND' backgroundColor='#CCCCCD' tag={['BRAND TEMPLATE']} backgroundImage={img4}/>

      </div>
      <div className="btn">
        <div className="btn-container">
        <p>VIEW ALL CASE STUDIES</p>
      <div className="btn-box"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
