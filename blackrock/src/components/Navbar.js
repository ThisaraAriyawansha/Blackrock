import React, { useState } from 'react';
import './CSS/Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
      WebNest
      </Link>
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('aboutUs')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#top">About Us</a>
          {hoveredItem === 'aboutUs' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li><a href="/about-us">About BlackRock</a></li>
                <li><a href="/principles">Principles</a></li>
                <li><a href="/leadership">Leadership</a></li>
                <li><a href="/history">History</a></li>
                <li><a href="/impact">Global Impact</a></li>
                <li><a href="/contacts">Contacts and Locations</a></li>
                <li><a href="/business">Doing Business with BlackRock</a></li>
                <li>Diversity, Equity, and Inclusion</li>
              </ul>
            </div>
          )}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('newsroom')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#top">Newsroom</a>
          {hoveredItem === 'newsroom' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li><a href="/newsOverview">Overview</a></li>
                <li><a href="/media">Media Contacts</a></li>
              </ul>
              <div className="image-section">
                <div className="dropdown-content2">
                  <h6 className='content2'>PRESS RELEASE</h6><br />
                  <a href="#top">
                    <p className='content2-link'>Read more about Global Infrastructure Partners, a <br />part of BlackRock</p>
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
          <a href="#top">Insights</a>
          {hoveredItem === 'Insights' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li>
                  <a href="#top" className='link-bold' style={{ fontWeight: 'bold' }}>
                    INSIGHTS & VIEWS
                  </a>
                </li>
                <li><a href="/investment">BlackRock Investment<br /> Institute</a></li>
                <li><a href="#top">Investment Stewardship</a></li>
                <li><a href="#top">Our approach to<br /> sustainability</a></li>
                <li><a href="#top">Public Policy</a></li>
                <li><a href="#top">Long-term capitalism</a></li>
                <li><a href="#top">Investor Perspectives</a></li>
              </ul>
              <div className="image-section">
                <div className="dropdown-content2">
                  <h6 className='content2'>BLACKROCK INVESTMENT INSTITUTE</h6><br />
                  <a href="#top">
                    <p className='content2-link'><strong>Mega forces: An investment opportunity</strong> <br />
                      Mega forces are big, structural changes that affect investing
                      now - and far in the future. This creates major opportunities - 
                      and risks - for investors.</p>
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
          <a href="#top">Investor Relations</a>
          {hoveredItem === 'Investor' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li><a href="#top">Overview</a></li>
                <li><a href="#top">Annual Reports & Proxy Information</a></li>
                <li><a href="#top">SEC Filings</a></li>
                <li><a href="#top">Stock Information</a></li>
                <li><a href="#top">Dividend History</a></li>
                <li><a href="#top">Events & Presentations</a></li>
                <li><a href="#top">Corporate Governance</a></li>
                <li><a href="#top">2022 Annual report</a></li>
              </ul>
            </div>
          )}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Corporate')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#top">Corporate sustainability</a>
          {hoveredItem === 'Corporate' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li>
                  <a href="#top" className='link-bold' style={{ fontWeight: 'bold' }}>
                    BLACKROCK<br /> SUSTAINABILITY
                  </a>
                </li>
                <li><a href="#top">Corporate Sustainability</a></li>
                <li><a href="#top">Human capital</a></li>
                <li><a href="#top">Environmental Sustainability</a></li>
                <li><a href="#top">Ethics & Integrity</a></li>
                <li><a href="#top">Health & Safety</a></li>
                <li><a href="#top">Social Impact</a></li>
              </ul>
            </div>
          )}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('Careers')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#top">Careers</a>
          {hoveredItem === 'Careers' && (
            <div className="dropdown-menu">
              <ul className="dropdown-links">
                <li>
                  <a href="#top" className='link-bold' style={{ fontWeight: 'bold' }}>
                    Careers at BlackRock
                  </a>
                </li>
                <li><a href="#top">Search Jobs</a></li>
                <li><a href="#top">Life at BlackRock</a></li>
                <li><a href="#top">Benefits</a></li>
                <li><a href="#top">Diversity, Equity and Inclusion</a></li>
                <li><a href="#top">Career Development</a></li>
                <li><a href="#top">Students & Graduates</a></li>
                <li><a href="#top">Supporting Veterans</a></li>
                <li><a href="#top">BlackRock Alumni Network</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>


      {/* Search Icon */}
      <div className="search-icon">
        <i className="fas fa-search"></i> 
      </div>
    </nav>
  );
};

export default Navbar;
