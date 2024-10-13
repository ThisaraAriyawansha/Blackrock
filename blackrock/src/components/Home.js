import React from 'react';
import './CSS/Home.css'; // Importing the CSS file
import Navbar from './Navbar';
import blackrockLogo from '../image/blackrock-gip-logo-860x800.webp'; // Importing the image

const HomePage = () => {
  return (
    <div>
<Navbar/>
      {/* Main Content */}
      <div className="main-content">
        <div>
          <h1>Global<br/> Infrastructure<br/> Partners, a part of <br/>BlackRock</h1>
          <p>
            BlackRock and Global Infrastructure Partners announce the successful completion of BlackRock’s acquisition of GIP.
            The combination creates an industry leader in infrastructure across equity, debt, and solutions – providing a diverse range 
            of infrastructure sector expertise and exposure across developed and emerging markets.
          </p>
        <button className="custom-button">
            <span class="red-arrow">{'>'}</span>Learn more
        </button>
        </div>
        
        {/* Image Section */}
        <div className="image-section">
          <img src={blackrockLogo} alt="Global Infrastructure Partners" />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; {new Date().getFullYear()} BlackRock. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;
