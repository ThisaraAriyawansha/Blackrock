import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Media.css';

const Media = () => {
  useEffect(() => {
    document.title = 'Global Media Contacts | BlackRock'; // Set page title
  }, []);

  return (
    <div>
      <SmallNavBar />
      <Navbar />
      
      <div className='media-title'>
        <h6>NEWSROOM</h6>
        <h1>
        Media contacts
        </h1>
      </div>
      


      <div className='innovations '>
    <p>For media and press inquiries, please see regional contact details below:</p>
       <hr></hr>
       <h1>Americas</h1>
    <div className='history-normal'>
        <strong className='sub-topic'>Ed Sweeney</strong><br/>
            Head of Corporate Affairs, Americas<br/>
    <strong>Office</strong>: +1 646 231 0268<br/>
    To email the Americas media team, click <strong> <a href='#'><u>here.</u></a></strong>
    </div><br/>

    <h1>Asia Pacific</h1>
    <div className='history-normal'>
        <strong className='sub-topic'>Rowena Kwok</strong><br/>
        Head of Asia Pacific<br/>
    <strong>Office</strong>:+852 3903 2913    <br/>
    To email the APAC media team, click <strong> <a href='#'><u>here.</u></a></strong>
    </div><br/>

    <h1>EMEA</h1>
    <div className='history-normal'>
        <strong className='sub-topic'>Ryan O’Keeffe</strong><br/>
        Head of EMEA<br/>
    <strong>Office</strong>:  +44 (0)207 743 1310<br/>
    To email the EMEA media team, click <strong> <a href='#'><u>here.</u></a></strong>
    </div>
    
</div>


<div className='Media-center-topic'>
    <h1>Read our latest press releases</h1>
    <button className="custom-button">
            <span className="red-arrow">{'>'}</span>Global newsroom
          </button>
</div>




<div className="explore-more">
  <h2>Learn more about BlackRock</h2>
  <div className="button-container">

  <Link to="/leadership" className="explore-button">
        <span className="red-arrow">{'>'}</span> Leadership
      </Link>
  <Link to="/about-us" className="explore-button">
        <span className="red-arrow">{'>'}</span> About us
      </Link>

      <Link to="/responsibility" className="explore-button">
        <span className="red-arrow">{'>'}</span> Responsibility
      </Link>
  </div>
</div>
      
      <Footer />
      <div className="legal-disclaimer-container">
      <p>© 2024 BlackRock, Inc. All rights reserved.</p>
</div>
    </div>
  );
};

export default Media;
