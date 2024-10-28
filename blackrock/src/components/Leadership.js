import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';

import './CSS/Leadership.css'; // Import your CSS file

const Leadership = () => {
    useEffect(() => {
        // Set the document title
        document.title = "Global Executive Committee";
    
      }, []);
  return (
    <div >
    <SmallNavBar />
    <Navbar />
      
     
    </div>
  );
};

export default Leadership;
