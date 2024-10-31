import React, { useState } from 'react';
import './CSS/SmallNavBar.css'; 

const HorizontalNavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="horizontal-nav-container">
      <div className="left-links">
        <a href="/">BlackRock</a>
        <a href="/ishares">iShares</a>
        <a href="/aladdin">Aladdin</a>
        <a href="/">Our company</a>
      </div>
      <div className="right-link">
        {/* Use Font Awesome icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-ellipsis-v"></i> {/* Font Awesome icon */}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="/">BlackRock</a>
          <a href="/ishares">iShares</a>
          <a href="/aladdin">Aladdin</a>
          <a href="/">Our company</a>
        </div>
      )}
    </nav>
  );
};

export default HorizontalNavBar;
