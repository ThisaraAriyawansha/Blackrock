import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Impact.css';
import imageone from '../image/blackrock-office-locations.jpg';
import imagetwo from '../image/countries-with-clients.jpg';
import peopleIcon from '../image/action-goto-press.svg'; 
import languagesIcon from '../image/speech-bubble.svg';
import countriesIcon from '../image/team-of-experts-people.svg';
import imagethree from '../image/percent-aum-by-region.jpg';


const Impact = () => {
    useEffect(() => {
      document.title = "Global Impact | BlackRock"; // Set the page title
    }, []);
  
    return (
      <div>
        <SmallNavBar />
        <Navbar />
        <div className='leadership-title'>

        <h1>
        Global impact
        </h1>
      </div>
        <div className='impact '>
        <h1>Worldwide reach. Local service and <br/>relationships.</h1>
        <p>With 70 offices in 30 countries, BlackRock is a truly global firm that can<br/>
         combine the benefits of worldwide reach with local service and <br/>
         relationships. We manage assets for clients in North and South America, <br/>
         Europe, Asia, Australia, the Middle East and Africa.</p>
         <hr></hr><br/>

         <p>Over 70 offices in more than 30 countries</p>
         <img src={imageone} alt="imageone" className="impact-image" /><br/>
         <p>100+ countries where we have clients</p>
         <img src={imagetwo} alt="imagetwo" className="impact-image" /><br/>
        </div><br/><br/>
  

  <div className='partners'>
    <h1>Clients and partners</h1>
    <p>
    BlackRock is trusted by clients of all types, from individual investors from all walks of life to pension<br/>
     funds, endowments, foundations and sovereign wealth funds as well as companies and governments<br/>
      facing significant financial challenges.
    </p>
  </div>


  <div className="who-we-are" id='whoweare'>
      <table className="info-table">
        <tbody>
          <tr>
            <td className="info-card">
              <img src={peopleIcon} alt="People Icon" className="icon" />
              <h3>We work for</h3>
              <p>Foundations<br/>
                    Doctors and nurses<br/>
                    Firefighters and teachers<br/>
                    Parents and grandparents<br/>
                    Sovereign wealth & pension funds</p>
            </td>
            <td className="info-card">
              <img src={languagesIcon} alt="Languages Icon" className="icon" />
              <h3>We've advised</h3>
              <p>AIG<br/>
                UBS<br/>
                Bank of Greece<br/>
                Her Majesty's Treasury<br/>
                Central Bank of Ireland<br/>
                Federal Reserve Bank of NY</p>
            </td>
            <td className="info-card">
              <img src={countriesIcon} alt="Countries Icon" className="icon" />
              <h3>We partner with</h3>
              <p>ING<br/>
                AT&T<br/>
                HSBC<br/>
                Google<br/>
                MetLife<br/>
                Freddie Mac<br/>
                Merrill Lynch<br/>
                Morgan Stanley</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
<div className='impact'>
    <p>Assets managed for clients in 100 countries</p>
    <img src={imagethree} alt="imagethree" className="impact-image" /><br/><br/>
    </div>

    <h6 className='small'>All figures as of March 31, 2015</h6>
        
  <div className="explore-more">
    <h2>Learn more about BlackRock</h2>
    <div className="button-container">
    <Link to="/about-us" className="explore-button">
          <span className="red-arrow">{'>'}</span> About us
        </Link>
        <Link to="/leadership" className="explore-button">
          <span className="red-arrow">{'>'}</span>Leadership
        </Link>
        <Link to="#" className="explore-button">
          <span className="red-arrow">{'>'}</span>Responsibility
        </Link>
    </div>
  </div>
  <Footer/>
  
  <div className="legal-disclaimer-container">
        <p>© 2024 BlackRock, Inc. All rights reserved.</p>
    </div>
      </div>
    );
  };
  
  export default Impact;
  