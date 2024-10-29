import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Business.css';
import blackRockImage from '../image/banner-suppliers.jpg'; // Import your image here


const Business = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Doing Business with BlackRock"; // Set the page title
      }, []);
    
    return (
        <div className="business-container">
            <SmallNavBar />
            <Navbar />
            
            <div className="business-content">
                <div className="text-section-business">
                    <h1 className="business-title">Doing Business <br/>with BlackRock</h1>
                    <p>
                        BlackRock’s purpose is to help more and more people experience<br/> 
                        financial well-being. Consistent with BlackRock’s values, we are dedicated to <br/>
                        establishing mutually beneficial third-party partnerships.
                    </p>
                </div>
                <div className="image-section">
                    <img src={blackRockImage} alt="BlackRock" className="business-image" />
                </div>
            </div>

<div className='Partnership'>
    <h1>
    Our Partnership
    </h1>
    <p>
    BlackRock is committed to seeking out third-party partnerships who can provide high quality,<br/>
     innovative and competitively priced goods and services to meet our business requirements.<br/>
      BlackRock believes leading institutions achieve optimal performance by incorporating diversity<br/>
       and <a href='#'><strong>sustainability</strong></a> within its business practices – including developing relationships with<br/>
        diverse-owned businesses within its supply base. As such, BlackRock is committed to fostering<br/>
         the growth and development of veteran, minority and women-owned businesses in the<br/>
          communities in which it operates. Explore these resources designed to help you do business <br/>with BlackRock.
    </p>
</div>


<div class="yellow-container">
        <div class="yellow-left">
            <h2 className='yelloh2'><strong>Standards of supplier ethics & <br/>conduct</strong></h2>
            <p className='yellowp'>
            BlackRock’s Supplier Code of Conduct & Ethics outlines the minimum<br/>
             expectations and standards for all BlackRock Suppliers in relation to<br/>
              human rights, inclusion and diversity, environmental sustainability,<br/>
               integrity and ethics in management practices.
            </p>
            <button className="business-button">
            <span className="black-arrow">{'>'}</span> Download the SCoCE
          </button>
        </div>
  {/* Right Part: Video Section */}
  <div className="image-section" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="https://www.blackrock.com/blk-corp-assets/cache-1606747593000/images/media-bin/web/global/thumbs/thumb-supplier-ethics-and-conduct.jpg" // Replace with your image URL
                        alt="Doing Business with BlackRock"
                        style={{ maxWidth: '80%', height: 'auto', border: 'none' }}
                    />
                </div>

    </div>



    <div class="Black-container">

  {/* Right Part: Video Section */}
  <div className="image-section" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="https://www.blackrock.com/blk-corp-assets/cache-1606747593000/images/media-bin/web/global/thumbs/thumb-diversity-and-sustainability.jpg" // Replace with your image URL
                        alt="Doing Business with BlackRock"
                        style={{ maxWidth: '80%', height: 'auto', border: 'none' }}
                    />
                </div>

                <div class="Black-left">
            <h2 className='Blackh2'><strong>Diversity & Sustainability</strong></h2>
            <p className='Blackp'>
            BlackRock places a high priority in fostering relationships with Diverse<br/>
             and Sustainable third-parties as well as those with a similar viewpoint.<br/>
              When evaluating such companies, these factors will be considered along <br/>
              with quality, service, and pricing competitiveness.
            </p>
            <button className="Black-button">
            <span className="red-arrow">{'>'}</span>Review our DE&I and Sustainability Commitments
          </button>
        </div>

    </div>




    <div class="yellow-container">
        <div class="yellow-left">
            <h2 className='yelloh2'><strong>Global Purchase Order Terms & <br/>Conditions </strong></h2>
            <p className='yellowp'>
            BlackRock’s Purchase Order Terms & Conditions highlights each<br/>
             Purchase Order placed for goods and/or services is subject to these <br/>
             standard purchase terms and the terms of the applicable Purchase Order, <br/>
             and is conditional upon Supplier’s agreement to such terms.
            </p>
            <button className="business-button">
            <span className="black-arrow">{'>'}</span>Review our PO T&Cs
          </button>
        </div>
  {/* Right Part: Video Section */}
  <div className="image-section" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="https://www.blackrock.com/blk-corp-assets/cache-1606747593000/images/media-bin/web/global/thumbs/thumb-po-terms-and-conditions.jpg" // Replace with your image URL
                        alt="Doing Business with BlackRock"
                        style={{ maxWidth: '80%', height: 'auto', border: 'none' }}
                    />
                </div>

    </div>




    <div class="Black-container">

  {/* Right Part: Video Section */}
  <div className="image-section" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="https://www.blackrock.com/blk-corp-assets/cache-1606747593000/images/media-bin/web/global/thumbs/thumb-procurement-and-diligence.jpeg" // Replace with your image URL
                        alt="Doing Business with BlackRock"
                        style={{ maxWidth: '80%', height: 'auto', border: 'none' }}
                    />
                </div>

                <div class="Black-left">
            <h2 className='Blackh2'><strong>Our procurement and diligence<br/> process</strong></h2>
            <p className='Blackp'>
            BlackRock values its business partners and views its suppliers as an<br/>
             extension of ourselves. As a result, BlackRock requires its suppliers to <br/>
             undergo thorough financial, operational, risk and contract diligence <br/>
             process on a consistent basis.
            </p>
            <p className='Blackp'>BlackRock is focused on growing long-term relationships that are<br/> sustainable and create joint value.</p>

        </div>

    </div>
           
            <Footer />
            <div className="legal-disclaimer-container">
        <p>© 2024 BlackRock, Inc. All rights reserved.</p>
    </div>
        </div>
    );
};

export default Business;
