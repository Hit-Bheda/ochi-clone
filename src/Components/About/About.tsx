import './about.scss'

function About() {
  return (
    <div className='about'>
      <div className="top-text">
        <h1>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span>raise funds,</span> <span>sell prod­ucts,</span> <span>ex­plain com­plex ideas,</span> and <span>hire great peo­ple.</span>
        </h1>
      </div>
      <div className="middle-text">
        <div className="about-left">
            <p>What you can expect:</p>
        </div>
        <div className="about-right">
            <div className="sub-left">
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className="sub-right">
                <div className="social-heading">Socials:</div>
                <div className="socials">
                    <a href="#">Instagram</a>
                    <a href="#">Behance</a>
                    <a href="#">Facebook</a>
                    <a href="#">Linkedin</a>
                </div>
            </div>
        </div>
      </div>
      <div className="bottom-text">
        <div className="bottom-left">
            <h1>Our approach:</h1>
            <button>READ MORE</button>
        </div>
        <div className="bottom-right">
            <div className="img-box"></div>
        </div>
      </div>
    </div>
  )
}

export default About
