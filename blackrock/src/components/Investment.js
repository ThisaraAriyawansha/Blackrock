import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Investment.css';
import mountainImage from '../image/corporate-nav-banner.jpg';
import peopleIcon from '../image/icon-trand-arrow.png'; 
import languagesIcon from '../image/icon-tech-break-though.png';
import countriesIcon from '../image/icon-bid-podcast.png';
import Content from './FooterContents'

const Investment = () => {
  useEffect(() => {
    document.title = "BlackRock Investment Institute | BlackRock";
  }, []);

  return (
    <div>
      <SmallNavBar />
      <Navbar />
      <div className="investment-page">

      <div className="investment-section">
        <div className="investment-content">
          <h1>BlackRock<br/> Investment Institute</h1>
          <p>
            The BlackRock Investment Institute (BII) leverages the firm’s expertise and generates<br/> 
            proprietary research to provide insights on macroeconomics, sustainable investing, <br/>
            geopolitics, and portfolio construction to help BlackRock’s portfolio managers and clients<br/>
             navigate financial markets.
          </p>
        </div>
        <div className="investment-image-links">
          <img src={mountainImage} alt="Mountain Landscape" className="investment-image" />
          <ul className="investment-links"><br/><br/>
  <li>Investment outlook</li>
  <hr />
  <li>Weekly market commentary</li>
  <hr />
  <li>Portfolio research and return expectations</li>
  <hr />
  <li>Tracking mega forces</li>
  <hr />
  <li>Join our upcoming webcasts</li><br/><br/>
</ul>

        </div>
      </div>
      </div>




      <div className="insights-section">
      {/* Insights Cards */}
      <div className="insights-cards">
        <div className="card">
          <h3 className="card-title">ASIA INSIGHTS</h3>
          <hr className='insights-hr'></hr>
          <p className="card-description">Japan through the lens of mega forces</p>
          <div className="card-footer">
            <span className="arrow">►</span>
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">BLACKROCK BULLETIN</h3>
          <hr className='insights-hr'></hr>
          <p className="card-description">U.S. recession fears overdone</p>
          <div className="card-footer">
            <span className="arrow">►</span>
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">PUBLICATIONS</h3>
          <hr className='insights-hr'></hr>
          <p className="card-description">View all of our insights</p>
          <div className="card-footer">
            <span className="arrow">►</span>
          </div>
        </div>
      </div>
    </div>



    <div class="insights-section">
  <div class="insights-box">
    <div class="insights-content">
      <div class="icon corporate-icon"></div>
      <div class="insights-text-content">
        <h3>Meet the BII team</h3>
        <p>The BlackRock Investment Institute connects BlackRock’s experts on the global<br/>
         economy, markets, portfolio construction and geopolitics.</p>
        <button className="info-button">
            <span className="red-arrow">{'>'}</span> Learn more
          </button>
                </div>
    </div>
  </div>
  
</div>


<div class="Black-container">


<div className="image-section" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                      src="https://www.blackrock.com/blk-corp-assets/cache-1565082186000/images/tools/blackrock-investment-institute/interactive-icon-bgri.png" 
                      alt="Doing Business with BlackRock"
                      style={{ maxWidth: '80%', height: 'auto', border: 'none' }}
                  />
              </div>

              <div class="Black-left">
          <h2 className='Blackh2'><strong>Geopolitical risk dashboard</strong></h2>
          <p className='Blackp'>
          We show market attention to top geopolitical risks, assess their likelihood,<br/>
           and analyze the potential market impact.
          </p>
          <button className="insights-button">
          <span className="red-arrow">{'>'}</span>Explore now
        </button>
      </div>

  </div>


<div class="yellow-container">
        <div class="yellow-left">
            <h2 className='yelloh2'><strong>Grabbing the wheel:<br/> putting money to work</strong></h2>
            <p className='yellowp'>
            The new regime of greater volatility is full of opportunities. Seizing them<br/>
             requires a dynamic and selective approach that blends the economic<br/>
              outlook with mega forces and more. Learn more from Wei Li, Global Chief<br/> Investment Strategist.
            </p>
            <button className="business-button">
            <span className="black-arrow">{'>'}</span> View our video library
          </button>
        </div>
  <div className="image-section" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <video
        controls
        style={{ maxWidth: '100%', height: 'auto',width: '500px', border: 'none' }}
    >
          <source src="https://dwu7l6as21h3p.cloudfront.net/BBL_2024Outlook-94.720p.wide.mp4" type="video/mp4" />
          Your browser does not support the video tag.
    </video>
  </div>

    </div><br/><br/>


    <div className="who-we-are" id='whoweare'>
      <table className="info-table">
        <tbody>
          <tr>
            <td className="info-card">
              <img src={peopleIcon} alt="People Icon" className="icon" />
              <p>
              <button className="info-button">
            <span className="red-arrow">{'>'}</span>Explore our interactive charts
          </button>
              </p>
            </td>
            <td className="info-card">
              <img src={languagesIcon} alt="Languages Icon" className="icon" />
              <p>
              <button className="info-button">
            <span className="red-arrow">{'>'}</span>Explore the BLK insights app
          </button>
              </p>
            </td>
            <td className="info-card">
              <img src={countriesIcon} alt="Countries Icon" className="icon" />
              <p>
              <button className="info-button">
            <span className="red-arrow">{'>'}</span>Tune in to the Bid podcast
          </button>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br/><br/>

    <div className="explore-more">
  <h2>Explore BII</h2>
  <div className="button-container">

      <Link to="#" className="explore-button">
        <span className="red-arrow">{'>'}</span>Meet the team
      </Link>
      <Link to="#" className="explore-button">
        <span className="red-arrow">{'>'}</span>Mega forces
      </Link>
      <Link to="#" className="explore-button">
        <span className="red-arrow">{'>'}</span>Publications
      </Link>
  </div>
</div><br/><br/>
    

<div className="subscription-form">
      <h2 className="form-header">
        Stay ahead of markets with the latest insights<br/> from the BlackRock Investment Institute
      </h2><br/><br/>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Email" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Investor type *</label>
            <select required>
              <option value="">Select Investor Type</option>
              <option value="individual">Individual</option>
              <option value="institution">Institution</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label>Location *</label>
            <select required>
              <option value="">Select Location</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label>Company *</label>
            <input type="text" placeholder="Company" required />
          </div>
        </div>
        <div className="checkbox-row">
          <input type="checkbox" id="opt-in" />
          <label htmlFor="opt-in">
            Please click here to opt-in to receiving future marketing communications from BlackRock
          </label>
        </div>
        <div className="form-footer">
          <span className='policy'>*Required information | Read our <a href="#privacy-policy">Privacy policy</a></span>
          <button type="submit" className="subscribe-button">Subscribe</button>
        </div>
      </form>
    </div><br/><br/>


    
      <Footer />
      <Content/>

      </div>
  );
};

export default Investment;
