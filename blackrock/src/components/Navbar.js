import React, { useState } from 'react';
import './CSS/Navbar.css'; // Import the CSS file
import aboutUsImage from '../image/mega-forces-banner.jpg'; // Import the image

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">BlackRock</div>

      {/* Navigation Links */}
      <ul className="nav-links">
        {/* About Us Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('aboutUs')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">About Us</a>

          {hoveredItem === 'aboutUs' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li><a href="#">About BlackRock</a></li>
                <li><a href="#">Principles</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Global Impact</a></li>
                <li><a href="#">Contacts and Locations</a></li>
                <li><a href="#">Doing Business with BlackRock</a></li>
                <li><a href="#">Diversity, Equity, and Inclusion</a></li>
              </ul>
              {/* Image and Additional Content */}
              <div className="image-section">
                <img
                  src={aboutUsImage}
                  alt="About Us"
                  className="dropdown-image"
                  style={{ width: '400px', height: '150px' }}
                />
                <div className="dropdown-content">
                  <h5>BLACKROCK INVESTMENT INSTITUTE</h5>
                  <p className='dropdown-paragraph'>Mega forces: An investment opportunity</p>
                  <p>
                    Explore the structural changes shaping investing now – and far in the future.
                    Uncover the risks and seize the opportunities.
                  </p>
                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Newsroom Dropdown */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('newsroom')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Newsroom</a>

          {hoveredItem === 'newsroom' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li><a href="#">Overview</a></li>
                <li><a href="#">Media Contacts</a></li>
              </ul>
              <div className="image-section">
                <img
                  src={aboutUsImage}
                  alt="Newsroom"
                  className="dropdown-image"
                  style={{ width: '400px', height: '150px' }}
                />
                <div className="dropdown-content">
                  <h5>BLACKROCK INVESTMENT INSTITUTE</h5>
                  <p className='dropdown-paragraph'>Mega forces: An investment opportunity</p>
                  <p>
                    Explore the structural changes shaping investing now – and far in the future.
                    Uncover the risks and seize the opportunities.
                  </p>
                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>
                </div>
                <div className="dropdown-content">
                  <h5>BLACKROCK INVESTMENT INSTITUTE</h5>
                  <p className='dropdown-paragraph'>Mega forces: An investment opportunity</p>
                  <p>
                    Explore the structural changes shaping investing now – and far in the future.
                    Uncover the risks and seize the opportunities.
                  </p>
                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Other Navbar Items */}
        <li className="nav-item"><a href="#">Insights</a></li>
        <li className="nav-item"><a href="#">Investor Relations</a></li>
        <li className="nav-item"><a href="#">Corporate Sustainability</a></li>
        <li className="nav-item"><a href="#">Careers</a></li>
      </ul>

      {/* Basic Search Icon */}
      <div className="search-icon">
        <i className="fas fa-search"></i> {/* Font Awesome search icon */}
      </div>
    </nav>
  );
};

export default Navbar;
