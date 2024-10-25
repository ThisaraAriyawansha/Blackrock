import React, { useEffect } from 'react';
import SmallNavBar  from './SmallNavBar';
import Footer from './Footer';
import Navbar from './Navbar';
import Content from './FooterContents'
import './CSS/AboutUs.css';

function AboutUs() {
  useEffect(() => {
    document.title = "About BlackRock - What We Do";
  }, []);

  return (
    <div>
              <SmallNavBar/>
      <div className="navbar-gap"></div> {/* Add a gap between navbars */}
      <Navbar/>
      <div className="about-container">
      <div className="about-text">
        <h1 className='about-h1'>About BlackRock</h1>
        <p className='about-para'>
          BlackRock is one of the world's leading providers of investment, advisory<br/>
           and risk management solutions. We are a fiduciary to our clients. We’re<br/>
            investing for the future on behalf of our clients, inspiring our employees,<br/> 
             and supporting our local communities. Watch the video to learn more.
        </p>
        <footer className="footer-links">
        <a href="#whatwedo">What we do</a>
        <a href="#whoweare">Who we are</a>
        <a href="#whoweserve">Who we serve</a>
      </footer>
      </div>
      <div className="about-video">
        <video controls>
          <source src="https://dwu7l6as21h3p.cloudfront.net/BLK-Investor-day-649.720p.wide.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>


    </div>
    </div>
  );
}

export default AboutUs;
