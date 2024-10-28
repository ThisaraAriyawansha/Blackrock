import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Contacts.css';

const Contacts = () => {
  useEffect(() => {
    document.title = "BlackRock Contacts and World Wide"; // Set the page title
  }, []);

  return (
    <div>
      <SmallNavBar />
      <Navbar />
      <div>
      <div className='contactus-title'>
            <h1>
            Contacts and locations
            </h1>
            </div>
      <Footer />
      <div className="legal-disclaimer-container">
        <p>© 2024 BlackRock, Inc. All rights reserved.</p>
    </div>
    </div>
    </div>
  );
};

export default Contacts;
