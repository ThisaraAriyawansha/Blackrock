import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Impact.css';

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
        </div>
  


  
        
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
  