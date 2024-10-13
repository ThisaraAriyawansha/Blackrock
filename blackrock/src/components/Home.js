import React from 'react';
import './CSS/Home.css'; // Importing the CSS file
import Navbar from './Navbar';
import blackrockLogo from '../image/blackrock-gip-logo-860x800.webp'; // Importing the image

const HomePage = () => {
    const cardData = [
        {
          title: "Transforming BlackRock for our clients",
          description: "Read more about the changes we’re making to help our clients meet their investment, portfolio, and business needs.",
        },
        {
          title: "Investing in the transition to a low-carbon economy",
          description: "Clients are asking for our perspectives on the long-term mega forces – including the transition to a low-carbon economy.",
        },
        {
          title: "Advancing shareholder democracy",
          description: "We are committed to a future where all investors can participate in proxy voting if they choose. Find out how we are delivering on this through BlackRock Voting Choice.",
        },
        {
          title: "Implications of an aging population",
          description: "We track the economic impact of aging – and the investment opportunities and risks it brings. Fewer people of working age limits how much countries can produce and grow – unless they can find ways to adapt.",
        },
        {
          title: "Weekly market commentary",
          description: "Stay tuned for insights on hot topics, the latest trends in the financial market and our broad asset class views via the Weekly commentary by the BlackRock Investment Institute. Read the latest market commentary.",
        },
      ];
    
  return (
    <div>
<Navbar/>
      {/* Main Content */}
      <div className="main-content">
        <div>
            <h4> Private Markets</h4>
          <h1>Global<br/> Infrastructure<br/> Partners, a part of <br/>BlackRock</h1>
          <p>
            BlackRock and Global Infrastructure Partners announce the successful completion of BlackRock’s acquisition of GIP.
            The combination creates an industry leader in infrastructure across equity, debt, and solutions – providing a diverse range 
            of infrastructure sector expertise and exposure across developed and emerging markets.
          </p>
          <button className="custom-button">
            <span class="red-arrow">{'>'}</span> Learn more
            </button>
        </div>

        
        
        {/* Image Section */}
        <div className="image-section">
          <img src={blackrockLogo} alt="Global Infrastructure Partners" />
        </div>
      </div>


      <div className="card-section">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <hr />
        </div>
      ))}
    </div>

    
      {/* Footer */}
      <div className="footer">
        &copy; {new Date().getFullYear()} BlackRock. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;
