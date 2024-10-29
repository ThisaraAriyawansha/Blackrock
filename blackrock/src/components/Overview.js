import React, { useEffect, useState } from 'react';
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
              Read our latest press releases, learn about executives, find
              contacts for media inquiries, and more. For local market product
              announcements, please click on the country links down below.
            </p>
            <button className="news-load-more">Load more</button>
          </div>
          <div className="news-explore">
            <h3 className="explore-title">Explore Newsroom</h3>
            <ul className="explore-list">
              <li className="explore-item">Media contacts</li>
              <li className="explore-item">Leadership</li>
              <li className="explore-item">Investor relations</li>
              <li className="explore-item">Public policy</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default NewsOverview;