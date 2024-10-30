import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Overview.css';

const NewsOverview = () => {

    useEffect(() => {
        document.title = "Newsroom | BlackRock"; // Set the page title
      }, []);

      
    return (
        <div>
            <SmallNavBar/>
            <Navbar/>
      <div className="news-overview-container">
        <div className="news-header">
          <h1 className="news-title">Global Newsroom</h1>
        </div>
        <div className="news-content">
          <div className="news-main">
            <h2 className="news-subtitle">Our resources for journalists</h2>
            <p className="news-description">
              Read our latest press releases, learn about executives, find<br/>
              contacts for media inquiries, and more. For local market product<br/>
              announcements, please click on the country links down below.
            </p>
            <button className="news-load-more">Load more<span className="white-arrow">{'>'}</span></button>
          </div>
          <div className="news-explore">
            <h3 className="explore-title">Explore Newsroom</h3>
            <ul className="explore-list">
              <li className="/explore-item">Media contacts<span className="white1-arrow">{'>'}</span></li>
              <li className="/explore-item">Leadership<span className="white2-arrow">{'>'}</span></li>
              <li className="/explore-item">Investor relations<span className="white1-arrow">{'>'}</span></li>
              <li className="/explore-item">Public policy<span className="white2-arrow">{'>'}</span></li>
            </ul>
          </div>
        </div>
      </div>



      <div className="Overview-more">
  <h2>Find country product press releases for</h2>
  <div className="button-container">
  <Link to="/explore-item" className="Overview-button">
        <span className="Overview-arrow">{'>'}</span>US iShares
      </Link>
      <Link to="/explore-item" className="Overview-button">
        <span className="Overview-arrow">{'>'}</span>Canada
      </Link>

  </div>
</div>

    
      
    <div className="explore-more">
  <h2>Learn more about BlackRock</h2>
  <div className="button-container">
  <Link to="/leadership" className="explore-button">
        <span className="red-arrow">{'>'}</span> Leadership
      </Link>
  <Link to="/about-us" className="explore-button">
        <span className="red-arrow">{'>'}</span> About us
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
  
  export default NewsOverview;