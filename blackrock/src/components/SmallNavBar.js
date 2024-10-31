import React from 'react';
import './CSS/SmallNavBar.css'; 

const HorizontalNavBar = () => {
  return (
    <nav className="horizontal-nav-container">
      <div className="left-links">
        <a href="/">BlackRock</a>
        <a href="/ishares">iShares</a>
        <a href="/aladdin">Aladdin</a>
        <a href="/">Our company</a>
      </div>
      <div className="right-link">
        <a href="/local-websites">Local websites</a>
      </div>
    </nav>
  );
};

export default HorizontalNavBar;
