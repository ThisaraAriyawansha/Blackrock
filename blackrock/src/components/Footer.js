import React from 'react';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top section with different background color */}
      <div className="footer-top">
        <h1 className="Footer-h1">Explore more</h1>
        <div className="footer-sections">
          <div className="footer-column">
            <h3>About Us</h3>
            <hr className="Footer-hr" />
            <br />
            <ul>
              <li>About BlackRock</li>
              <li>Principles</li>
              <li>Leadership</li>
              <li>History</li>
              <li>Global Impact</li>
              <li>Contacts and Locations</li>
              <li>Doing Business with BlackRock</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Newsroom</h3>
            <hr className="Footer-hr" />
            <br />
            <ul>
              <li>Overview</li>
              <li>Media Contacts</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Insights</h3>
            <hr className="Footer-hr" />
            <br />
            <ul>
              <li>BlackRock Investment Institute</li>
              <li>Investment Stewardship</li>
              <li>Our Approach to Sustainability</li>
              <li>Public Policy</li>
              <li>Long-term Capitalism</li>
              <li>Investor Perspectives</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Investor Relations</h3>
            <hr className="Footer-hr" />
            <br />
            <ul>
              <li>Overview</li>
              <li>Annual Reports</li>
              <li>Stock Information</li>
              <li>Dividend History</li>
              <li>Events & Presentations</li>
              <li>Corporate Governance</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Corporate Sustainability</h3>
            <hr className="Footer-hr" />
            <br />
            <ul>
              <li>Human Capital</li>
              <li>Environmental Sustainability</li>
              <li>Ethics & Integrity</li>
              <li>Health & Safety</li>
              <li>Social Impact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Careers</h3>
            <hr className="Footer-hr" />
            <br />
            <ul>
              <li>Search Jobs</li>
              <li>Life at BlackRock</li>
              <li>Diversity & Inclusion</li>
              <li>Students & Graduates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section with different background color */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href='/' className='Footer-Linkk'>BlackRock.</a><br/><br/>
          <p>
            As a global investment manager and fiduciary to our<br/>
             clients, our purpose at BlackRock is to help everyone <br/>
             experience financial well-being. Since 1999, we've been a <br/>
             leading provider of financial technology, and our clients<br/>
              turn to us for the solutions they need when planning for <br/>
              their most important goals.
          </p>
        </div>

        {/* Vertical Line */}
        <div className="vertical-line-Footer"></div>
        <div className="footer-bottom-right">
            <table>
                <tr>
                    <td>
                    <div className="legal-links">
            <ul>
            <h3 >Corporate</h3>

              <li>Fraud protection tips</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Investor relations</li>
              <li>UK Corporate Tax Strategy</li>
              <li>UK Gender Pay Reporting</li>
              <li>Accessibility</li>
              <li>Responsible Disclosure</li>
            </ul>
          </div>
                    </td>
                    <td>
                    <div className="legal-links">
            
            <ul>
            <h3>Legal</h3>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Business Continuity</li>
              <li>FINRA BrokerCheck</li>
              <li>Best Ex & Order Placement Policy</li>
              <li>Rule 606 Disclosure</li>
              <li>Investor Rights</li>
              <li>Manage Cookies</li>
            </ul>
          </div> 
                    </td>
                </tr>
            </table>
            

        </div>
      </div>
    </footer>
  );
};

export default Footer;
