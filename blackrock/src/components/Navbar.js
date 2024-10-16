import React, { useState } from 'react';
import './CSS/Navbar.css'; // Import the CSS file
import aboutUsImage from '../image/mega-forces-banner.jpg'; // Import the image

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">BlackRock</div>
        <ul className="nav-links">
          {/* About Us with nested links */}
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="about-us-item"
          >
            <a href="#">About Us</a>
            {isHovered && (
              <div className="hover-content">
                <ul className="about-us-links">
                  <li><a href="#">About BlackRock</a></li>
                  <li><a href="#">Principles</a></li>
                  <li><a href="#">Leadership</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Global Impact</a></li>
                  <li><a href="#">Contacts and Locations</a></li>
                  <li><a href="#">Doing Business with BlackRock</a></li>
                  <li><a href="#">Diversity, Equity, and Inclusion</a></li>
                </ul>
                {/* Image on the right side */}
                <img
                  src={aboutUsImage} 
                  alt="About Us"
                  className="hover-image"
                />
              </div>
            )}
          </li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="search-icon">&#128269;</i> {/* Unicode for magnifying glass */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
