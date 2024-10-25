import React from 'react';
import './CSS/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <header className="hero">
        <h1>About Us</h1>
        <p>At [Company Name], we empower people with financial solutions for a better future.</p>
      </header>
      <section className="section mission">
        <h2>Our Mission</h2>
        <p>To deliver sustainable and innovative financial solutions that enhance lives worldwide.</p>
      </section>
      <section className="section values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Client Commitment</li>
        </ul>
      </section>
      <footer className="footer">
        <p>© 2024 [Company Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
