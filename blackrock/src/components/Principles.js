import React, { useEffect } from 'react';
import SmallNavBar from './SmallNavBar';
import Footer from './Footer';
import Navbar from './Navbar';
import './CSS/Principles.css';


const PrincipalUI = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Our Mission and Principle";

  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <SmallNavBar />
      <Navbar />
      
      <div className='orange'>
        <h1>
        Principles
        </h1>
      </div>
      
     
      
    </div>
  );
};

export default PrincipalUI;
