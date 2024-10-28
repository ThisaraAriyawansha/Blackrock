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
  