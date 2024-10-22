import React from 'react';
import './CSS/Home.css'; // Importing the CSS file
import Navbar from './Navbar';
import blackrockLogo from '../image/blackrock-gip-logo-860x800.webp'; // Importing the image
import SmallNavBar  from './SmallNavBar';

const HomePage = () => {
  return (
    <div>
      <SmallNavBar/>
      <div className="navbar-gap"></div> {/* Add a gap between navbars */}
      <Navbar/>

      {/* Main Content */}
      <div className="main-content">
        <div>
          <h4 className='small-content'>Private Markets</h4><br/>
          <h1>Global<br /> Infrastructure<br /> Partners, a part of <br />BlackRock</h1>
          <p>
            BlackRock and Global Infrastructure Partners announce the successful completion of BlackRock’s acquisition of GIP.
            The combination creates an industry leader in infrastructure across equity, debt, and solutions – providing a diverse range 
            of infrastructure sector expertise and exposure across developed and emerging markets.
          </p>
          <button className="custom-button">
            <span className="red-arrow">{'>'}</span> Learn more
          </button>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src={blackrockLogo} alt="Global Infrastructure Partners" />
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <h2>Transforming <br /> BlackRock for our<br /> clients</h2>
          <p>Read more about the changes we’re making to help our clients meet their investment, portfolio, and business needs.</p>
        </div>

        <div className="grid-item">
          <h2>Investing in the<br /> transition to a low-<br />carbon economy</h2>
          <p>Clients are asking for our perspectives on the long-term mega forces – including the transition to a low-carbon economy.</p>
        </div>

        <div className="grid-item">
          <h2>Advancing shareholder<br /> democracy</h2>
          <p>We are committed to a future where all investors can participate in proxy voting if they choose. 
            Find out how we are delivering on this through BlackRock Voting Choice.</p>
        </div>
        </div>
        <table>
  <tr>
    <td>
      <div className="grid-item grid-item-wide">
        <h2>Implications of an aging population</h2>
        <p>We track the economic impact of aging – and the investment opportunities and<br />
          risks it brings. Fewer people of working age limits how much countries can <br />
          produce and grow – unless they can find ways to adapt.</p>
      </div>
    </td>
    <td>
      <div className="grid-item grid-item-wide">
        <h2>Weekly market commentary</h2>
        <p>Stay tuned for insights on hot topics, the latest trends in the financial market and<br />
          our broad asset class views via the Weekly commentary by the BlackRock<br />
          Investment Institute. Read the latest market commentary.</p>
      </div>
    </td>
  </tr>
</table>


<div class="yellow-container">
        <div class="yellow-left">
            <h2 className='yelloh2'>About BlackRock</h2>
            <p className='yellowp'>
                BlackRock is one of the world’s leading providers of investment, advisory, and risk<br/>management solutions. 
                We are a fiduciary to our clients. We’re investing for the<br/> future on behalf of our clients, inspiring our 
                employees, and supporting our local<br/> communities. Watch the video to learn more.
            </p>
            <button className="yellow-button">
            <span className="black-arrow">{'>'}</span> Learn more
          </button>
        </div>
  {/* Right Part: Video Section */}
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <video
        controls
        style={{ maxWidth: '100%', height: 'auto',width: '500px', border: 'none' }}
    >
        <source src={`${process.env.PUBLIC_URL}/BLK_SOSC_Investor_Day-653.720p.wide.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>

    </div>



<div class="info-section">
  <div class="info-box">
    <div class="icon corporate-icon"></div>
    <h3>Corporate sustainability</h3>
    <p>We focus on the long-term sustainability of BlackRock so we can continue to deliver value to our clients, shareholders, employees, and communities.</p>
    <a href="#" class="learn-more">Learn more</a>
  </div>
  
  <div class="info-box">
    <div class="icon stewardship-icon"></div>
    <h3>Investment stewardship</h3>
    <p>We engage with companies to inform our voting and promote sound corporate governance that is consistent with long-term financial value creation.</p>
    <a href="#" class="learn-more">Learn more</a>
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
