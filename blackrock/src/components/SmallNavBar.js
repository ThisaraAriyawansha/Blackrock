import React from 'react';
import './CSS/SmallNavBar.css'; // Updated CSS file for styling

const HorizontalNavBar = () => {
  return (
    <nav className="horizontal-nav-container">
      <a href="#blackrock">BlackRock</a>
      <a href="#ishares">iShares</a>
      <a href="#aladdin">Aladdin</a>
      <a href="#our-company">Our company</a>
      <a href="#local-websites">Local websites</a>
    </nav>
  );
};

export default HorizontalNavBar;
