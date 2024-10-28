import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/History.css'; 
import Banner from '../image/blackrock-history-full-bleed-hero-banner.jpg';

const History = () => {
  useEffect(() => {
    document.title = "History | BlackRock"; // Set the page title
  }, []);

  return (
    <div>
      <SmallNavBar />
      <Navbar />
      <div className="banner">
        <img src={Banner} alt="History Banner" className="banner-image" />
        <h1 className="banner-text">History</h1>
      </div>


<div className='innovations '>
    <h1>Ideas, innovations and growth</h1>
    <p>Over the past 30 years, BlackRock has evolved from an eight-person start<br/>
     up to a global company who’s trusted to manage more assets* than any <br/>
     other investment manager. The past three decades have shown our<br/>
      commitment to our platform, our people and our technology so that we<br/>
       can continue to deliver long-term value for our clients and our <br/>shareholders.</p>
       <hr></hr>
       <h1>See how BlackRock’s journey <br/>has unfolded.</h1>
       <h1>1988</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock began in 1988 with eight people in a single room who shared a determination to put<br/> 
    clients’ needs and interests first. Our founders believed they could manage assets in a way that<br/>
     was better for their clients – by utilizing their passion for understanding and managing risk. This<br/>
      is the way the firm continues to be managed today.
    </p>
    </div>

    <h1>1999</h1>
       
    <div className='history-normal'>
    <p>
    Recognizing the opportunity to bring transparency, scale and innovation to risk management<br/>
     for the broader industry, BlackRock begins to sell its proprietary technology,<strong> <a href='#'>Aladdin.</a></strong> This <br/>
     technology, integral to who we are as a firm, is embedded in everything we do, thus<br/>
      differentiating us as an investment and risk manager.
    </p>
    </div>


    <h1>1999</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock makes its Initial Public Offering on the New York Stock Exchange on October 1st, for<br/>
     $14 a share. By the end of that year, the firm had $165 billion in assets under management due<br/>
      to its strengthening relationships with global institutions.
    </p>
    </div>


    <h1>2000</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock founds <a href='#'><strong>BlackRock Solutions,</strong> </a>with Aladdin as the basis for the business. This marked<br/>
     the beginning of BlackRock’s role as a technology provider.
    </p>
    </div>


    <h1>2006</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock acquires Merrill Lynch Investment Management, expanding its retail and<br/> international presence.
    </p>
    </div>



    <h1>2008</h1>
       
    <div className='history-normal'>
    <p>
    Amidst the financial crisis, the Head of the Federal Reserve Bank of New York asks BlackRock to<br/>
     analyze Bear Stearns' mortgage-backed securities assets and determine their value. BlackRock<br/>
      plays a key advisory role to institutions across the globe seeking to navigate the financial crisis. 
    </p>
    </div>



    <h1>2009</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock acquires Barclay's Global Investors (BGI), becoming the world's largest asset<br/>
     manager, with employees in 24 countries. With this acquisition, BlackRock makes the <br/>
     unprecedented move of bringing alpha and index strategies under one roof to provide a wider<br/>
      breadth of solutions for its clients.
    </p>
    </div>



    <h1>2012</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock launches iShares Core to provide investors with broad stock and bond market<br/>
     exposure at the foundation of their portfolios in a low-cost and tax-efficient way.
    </p>
    </div>


    <h1>2016</h1>
       
    <div className='history-normal'>
    <p>
    Given the changing wealth management landscape, BlackRock focuses on providing portfolio<br/>
     construction expertise to financial advisors by leveraging our diverse platform and portfolio<br/>
      construction technology. Aladdin Wealth, which benefits from the same data and risk <br/>
      capabilities used by our own investment teams, is sold to our first wealth management client.  
    </p>
    </div>


    <h1>2017</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock further increases our commitment to <a href='#'><strong>Investment Stewardship,</strong></a> emphasizing the<br/> 
    importance of purpose to long-term profitability. Through this work and the overall dedication to<br/>
     Investment Stewardship over the past seven years, we go beyond proxy voting to engage with<br/>
      companies to drive long-term, sustainable financial performance and ultimately the value of our<br/> clients’ assets.
    </p>
    </div>


    <h1>2018</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock launches its first AI Lab in Palo Alto to accelerate its use of artificial intelligence and<br/>
    associated disciplines – machine learning, data science, natural language processing – to <br/>
    improve outcomes and drive progress for investors, clients and the firm.
    </p>
    </div>


    <h1>2019</h1>
       
    <div className='history-normal'>
    <p>
    BlackRock further focuses its role in the retirement crisis, launching BlackRock Retirement<br/>
     Solutions Group. With two thirds of the assets we manage related to retirement, this new<br/>
      initiative was formed to explore innovative solutions to the most pressing retirement challenges.
    </p>
    <p>
    BlackRock acquires <a href='#'><strong>eFront,</strong></a> the world’s leading provider of end-to-end alternative investment<br/>
     management software and solutions, to accelerate our ambition to make alternatives less<br/>
      alternative and enable a whole portfolio approach. The acquisition establishes a new standard<br/>
       for investment and risk management technology, enabling investors to seamlessly manage <br/>
       portfolios across public and private asset classes on a single platform.
    </p>
    </div>
    <div className='History-bold'>*Source: BlackRock. Based on $6.47trillion in AUM as of 03/31/20.</div><br/>
</div>
      
<div className="explore-more">
  <h2>Learn more about BlackRock</h2>
  <div className="button-container">
  <Link to="/about-us" className="explore-button">
        <span className="red-arrow">{'>'}</span> About us
      </Link>
      <Link to="/leadership" className="explore-button">
        <span className="red-arrow">{'>'}</span>Leadership
      </Link>
      <Link to="#" className="explore-button">
        <span className="red-arrow">{'>'}</span>Responsibility
      </Link>
  </div>
</div>
<Footer/>

<div className="legal-disclaimer-container">
      <p>© 2024 BlackRock, Inc. All rights reserved.</p>



<p>MKTGH0924E/M-3891343</p>
</div>
    </div>
  );
};

export default History;
