import React, { useState } from 'react';
import './CSS/Navbar.css'; // Import the CSS file
import aboutUsImage from '../image/mega-forces-banner.jpg'; // Import the image
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
      BlackRock
    </Link>
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
              <li><a href="/about-us" >About BlackRock</a></li>
              <li><a href="/principles">Principles</a></li>
                <li><a href="/leadership">Leadership</a></li>
                <li><a href="/history">History</a></li>
                <li><a href="/impact">Global Impact</a></li>
                <li><a href="/contacts">Contacts and Locations</a></li>
                <li><a href="/business">Doing Business with BlackRock</a></li>
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
                  Explore the structural changes shaping investing now – and<br/> far in the future. Uncover the risks and seize the opportunities.
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
                <li><a href="/newsOverview">Overview</a></li>
                <li><a href="/media">Media Contacts</a></li>
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
                    Explore the structural changes shaping investing now –<br/> and far in the future.
                    Uncover the risks and seize the opportunities.
                  </p>
                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>
                </div>
                <div class="vertical-line"></div> 
                <div className="dropdown-content2">
                <h6 className='content2'>PRESS RELEASE</h6><br/>
                  <a href="#" >
                     <p className='content2-link'>Read more about Global Infrastructure Partners, a <br/>part of BlackRock</p>
                  </a>
                </div>
                
              </div>
              

            </div>
          )}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Insights')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Insights</a>

          {hoveredItem === 'Insights' && (
            
            <div className="dropdown-menu">
              <ul className="dropdown-links">
              <li>
                <a href="#" className='link-bold' style={{ fontWeight: 'bold' }}>
                  INSIGHTS & VIEWS
                </a>
              </li>
                <li><a href="#">BlackRock Investment<br/> Institute</a></li>
                <li><a href="#">Investment Stewardship</a></li>
                <li><a href="#">Our approach to<br/> sustainability</a></li>
                <li><a href="#">Public Policy</a></li>
                <li><a href="#">Long-term capitalism</a></li>
                <li><a href="#">Investor Perspectives</a></li>
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
                  Explore the structural changes shaping investing now – and<br/> far in the future. Uncover the risks and seize the opportunities.
                  </p>
                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>
                </div>
              </div>
            </div>
          )}
        </li>
        
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Investor')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Investor Relations</a>

          {hoveredItem === 'Investor' && (
            
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li><a href="#">Overview</a></li>
                <li><a href="#">Annual Reports & Proxy Information</a></li>
                <li><a href="#">SEC Filings</a></li>
                <li><a href="#">Stock Information</a></li>
                <li><a href="#">Dividend History</a></li>
                <li><a href="#">Events & Presentations</a></li>
                <li><a href="#">Corporate Governance</a></li>
                <li><a href="#">2022 Annual report</a></li>
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
                  Explore the structural changes shaping investing now – and<br/> far in the future. Uncover the risks and seize the opportunities.
                  </p>
                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>
                </div>
              </div>
            </div>
          )}
        </li>
        
        
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Corporate')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Corporate sustainability</a>

          {hoveredItem === 'Corporate' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
              <li>
                <a href="#" className='link-bold' style={{ fontWeight: 'bold' }}>
                BLACKROCK<br/> SUSTAINABILITY
                </a>
              </li>
                <li><a href="#">Corporate Sustainability  </a></li>
                <li><a href="#">Human capital </a></li>
                <li><a href="#">Environmental Sustainability</a></li>
                <li><a href="#">Ethics & Integrity</a></li>
                <li><a href="#">Health & Safety</a></li>
                <li><a href="#">Social Impact</a></li>
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
                  Explore the structural changes shaping investing now – and<br/> far in the future. Uncover the risks and seize the opportunities.
                  </p>

                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>

                </div>
              </div>
            </div>
          )}
        </li>       
        
        
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Careers')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Careers</a>
          {hoveredItem === 'Careers' && (
            
            <div className="dropdown-menu">
              <ul className="dropdown-links">
              <li>
                <a href="#" className='link-bold' style={{ fontWeight: 'bold' }}>
                Careers at BlackRock
                </a>
              </li>
                <li><a href="#">Search Jobs</a></li>
                <li><a href="#">Life at BlackRock </a></li>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">Diversity, Equity and Inclusion</a></li>
                <li><a href="#">Career Development</a></li>
                <li><a href="#">Students & Graduates</a></li>
                <li><a href="#">Supporting Veterans</a></li>
                <li><a href="#">BlackRock Alumni Network</a></li>

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
                  Explore the structural changes shaping investing now – and<br/> far in the future. Uncover the risks and seize the opportunities.
                  </p>
                  <a href="#" className="insights-link">
                    <p className='links'><span className="red-arrow">{'>'}</span> Click to read our Insights</p>
                  </a>
                </div>
              </div>
            </div>
          )}
        </li>     
        
         </ul>

      {/* Basic Search Icon */}
      <div className="search-icon">
        <i className="fas fa-search"></i> {/* Font Awesome search icon */}
      </div>
    </nav>
  );
};

export default Navbar;
