import React, { useEffect } from 'react';
import SmallNavBar  from './SmallNavBar';
import Footer from './Footer';
import Navbar from './Navbar';
import Content from './FooterContents'
import './CSS/AboutUs.css';
import financialWellbeing from '../image/financial-security-au.webp';
import investmentAccess from '../image/investment-access-au.webp';
import fiduciary from '../image/sustainable-outcomes-au.webp';
import economies from '../image/inclusive-economies-au.webp';

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


<div className='What-we-do'> 
<table >
    <tr>
        <td class="intro-section">

        <p className='intro-section-p'>
          Our purpose is to help more and more people experience financial well-<br/>
          being. Together with our clients, we’re contributing to a more equitable<br/>
           and resilient world – today and for generations to come.
        </p><br/>
        <hr className='intro-section-hr'></hr><br/>
        <h1 className='intro-section-h1'>Our focus</h1>
        </td>
        <th></th>
    </tr>
    <tr>
    <td className='image-container-left'>
            <img src={financialWellbeing} alt="Financial well-being" className="resized-image-left" />
     </td>
        <td className='text-section'>
        <h3>Financial well-being</h3>
            <p>
              We help millions of people invest to build savings that serve them<br/>
               throughout their lives. As it becomes harder to save for goals like <br/>
               retirement, we help more people invest for their future.
            </p>
        </td>
    </tr>
    <tr>
        <td className='text-section'>
        <h3>Investment access</h3>
            <p>
              We make investing easier and more affordable. How can we use our <br/>
              expertise to help more and more people invest?
            </p>
            <div className='text-section-btn'>

            <button className="info-button">
            <span className="red-arrow">{'>'}</span> Investing with iShares
          </button>
          </div>
         </td>
        <td className='image-container-right'>
        <img src={investmentAccess} alt="Investment access" className="resized-image-right"/>

        </td>
    </tr>
    <tr>
        <td className='image-container-left'>
        <img src={fiduciary} alt="Acting as a fiduciary" className='resized-image-left'/>
        </td>
        <td className='text-section'>
        <h3>Acting as a fiduciary</h3>
            <p>
            Our investment approach is informed by three principles: we start by<br/>
             understanding the client’s investment objectives; we seek the best risk-<br/>
             adjusted returns within the scope of the mandate they give us; and we<br/>
              underpin our work with research, data, and analytics. We apply those<br/>
               same principles to sustainability and the low-carbon transition.
            </p>
            <div className='text-section-btn'>
            <button className="info-button">
            <span className="red-arrow">{'>'}</span> Explore sustainability at BlackRock
          </button>
          </div>
                  </td>
    </tr>
    <tr>
        <td className='text-section'>
        <h3>Resilient economies</h3>
            <p>
            Our purpose is to help more and more people experience financial well-<br/>
            being. In addition to offering our clients choice to meet their investment<br/>
             goals, we also work to bring economic opportunities to more people<br/>
              through the BlackRock Foundation and our employee engagement programs.
            </p>
        </td>
        <td className='image-container-right'>
        <img src={economies} alt="Resilient economies" className="resized-image-right"/>

        </td>
    </tr>
</table>
</div>



    </div>
  );
}

export default AboutUs;
