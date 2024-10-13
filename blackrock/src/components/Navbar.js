import React from 'react';
import './CSS/Navbar.css'; // Importing the CSS file


const Navbar = () => {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">BlackRock</div>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </nav>

      </div>
    );
  };
  
  export default Navbar;
  