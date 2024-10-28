import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import './CSS/Leadership.css'; // Import your CSS file
import SmallNavBar from './SmallNavBar';
import Larry from '../image/larry-fink-200x200.webp';
import Rob from '../image/kapito-rob-200x200.webp';

import Joud  from '../image/joud-200-2023.webp';
import Lance  from '../image/headshot-lance-braunstein.png';
import Susan  from '../image/susan-chan-200-2023.webp';
import Samara  from '../image/samara-cohen-200-2024.webp';
import Stephen  from '../image/cohen-stephen-200x200.webp';
import Ed  from '../image/portrait-fishwick-ed-2022-200x200.webp';
import Goldstein from '../image/portrait-goldstein-rob-2022-200x200.webp';
import Charles  from '../image/charles-hatami.webp';
import Caroline  from '../image/caroline-heller-200-2023.webp';
import Philipp  from '../image/hildebrand-philipp-200x200.webp';
import Kelly from '../image/john-kelly-200x200.webp';
import Kushel from '../image/portrait-kushel-richard-2022-200x200.webp';
import Rachel  from '../image/lord-rachel-new-200x200.webp';
import Chris  from '../image/portrait-meade-christopher-2022-200x200.webp';
import Manish  from '../image/portrait-mehta-manish-2022-200x200.webp';
import Sudhir  from '../image/nair-sudhir-200x200.webp';
import Adebayo  from '../image/bayo-ogunlesi.webp';
import Raj  from '../image/raj-rao.webp';
import Rick  from '../image/rick-rieder-200-2023.webp';
import Raffaele  from '../image/raffaele-savi-200-2023.webp';
import Martin  from '../image/small-martin-2022-200x200.webp';
import Derek  from '../image/portrait-stein-derek-2022-200x200.webp';
import Mark  from '../image/mark-wiedman-2022.webp';
import Hallac  from '../image/hallac-charlie-200x200.webp';



const Leadership = () => {
    useEffect(() => {
        // Set the document title
        document.title = "Global Executive Committee";
    
      }, []);
  return (
    <div >
    <SmallNavBar />
    <Navbar />
    <div className='leadership-title'>
        <h6>ABOUT US</h6>
        <h1>
        The Global Executive Committee
        </h1>
      </div>
     
      <div className="team-section">
    <table className="team-table">
        <tbody>
            <tr>
                <td className="team-member">
                    <img src={Larry} alt="Larry" className="member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="team-member">
                    <img src={Rob} alt="Rob" className="member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div className="team-section-sub">
    <table className="team-table">
        <tbody>
            <tr>
                <td className="sub-member">
                    <img src={Joud} alt="Joud" className="sub-member-icon" />
                    <h3>Joud Abdel Majeid</h3>
                    <p>Global Head of Investment Stewardship</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Joud Abdel Majeid's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Lance} alt="Lance" className="sub-member-icon" />
                    <h3>Lance Braunstein</h3>
                    <p>Head of Aladdin Engineering</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Lance Braunstein's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Susan} alt="Susan" className="sub-member-icon" />
                    <h3>Susan Chan</h3>
                    <p>Head of Asia Pacific</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Susan Chan's bio
                    </button>
                </td>
            </tr>
            <br/><br/><br/><br/>

            <tr>
                <td className="sub-member">
                    <img src={Samara} alt="Samara" className="sub-member-icon" />
                    <h3>Samara Cohen</h3>
                    <p>Chief Investment Officer of ETF and Index<br/> Investments</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Samara Cohen's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Stephen} alt="Stephen" className="sub-member-icon" />
                    <h3>Stephen Cohen</h3>
                    <p>Chief Product Officer </p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Stephen Cohen's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Ed} alt="Ed" className="sub-member-icon" />
                    <h3>Ed Fishwick</h3>
                    <p>Chief Risk Officer & Head of the Risk and<br/> Quantitative Analysis</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Ed Fishwick's bio
                    </button>
                </td>
            </tr><br/><br/><br/><br/>





            <tr>
                <td className="sub-member">
                    <img src={Goldstein} alt="Goldstein" className="sub-member-icon" />
                    <h3>Rob Goldstein</h3>
                    <p>Chief Operating Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Goldstein's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Charles} alt="Charles" className="sub-member-icon" />
                    <h3>Charles Hatami</h3>
                    <p>Global Head of the Financial & Strategic Investors<br/> Group</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Charles Hatami's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Caroline} alt="Caroline" className="sub-member-icon" />
                    <h3>Caroline Heller</h3>
                    <p>Global Head of Human Resources</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Caroline Heller's bio
                    </button>
                </td>
            </tr><br/><br/><br/><br/>




            <tr>
                <td className="sub-member">
                    <img src={Philipp} alt="Philipp" className="sub-member-icon" />
                    <h3>Philipp Hildebrand</h3>
                    <p>Vice Chairman </p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Philipp Hildebrand's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Kelly} alt="Kelly" className="sub-member-icon" />
                    <h3>John Kelly</h3>
                    <p>Global Head of Corporate Affairs</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read John Kelly's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Kushel} alt="Kushel" className="sub-member-icon" />
                    <h3>J. Richard Kushel</h3>
                    <p>Head of the Portfolio Management Group</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read J. Richard Kushel's bio
                    </button>
                </td>
            </tr><br/><br/><br/><br/>




            <tr>
                <td className="sub-member">
                    <img src={Rachel} alt="Rachel" className="sub-member-icon" />
                    <h3>Rachel Lord</h3>
                    <p>Head of International</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Rachel Lord's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Chris} alt="Chris" className="sub-member-icon" />
                    <h3>Chris Meade</h3>
                    <p>Chief Legal Officer  </p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Chris Meade's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Manish} alt="Manish" className="sub-member-icon" />
                    <h3>Manish Mehta</h3>
                    <p>Head of BlackRock Global Markets & Index <br/>Investments</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Manish Mehta's bio
                    </button>
                </td>
            </tr><br/><br/><br/><br/>





            <tr>
                <td className="sub-member">
                    <img src={Sudhir} alt="Sudhir" className="sub-member-icon" />
                    <h3>Sudhir Nair</h3>
                    <p>Global Head of Aladdin</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Sudhir Nair's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Adebayo} alt="Adebayo" className="sub-member-icon" />
                    <h3>Adebayo Ogunlesi</h3>
                    <p>Chairman & Chief Executive Officer Global<br/> Infrastructure Partners</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Adebayo Ogunlesi’s bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Raj} alt="Raj" className="sub-member-icon" />
                    <h3>Raj Rao</h3>
                    <p>President and Chief Operating Officer Global<br/> Infrastructure Partners</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Raj Rao's bio
                    </button>
                </td>
            </tr><br/><br/><br/><br/>




            <tr>
                <td className="sub-member">
                    <img src={Rick} alt="Rick" className="sub-member-icon" />
                    <h3>Rick Rieder</h3>
                    <p>Chief Investment Officer of Global Fixed Income</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Rick Rieder's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Raffaele} alt="Raffaele" className="sub-member-icon" />
                    <h3>Raffaele Savi</h3>
                    <p>Global Head of BlackRock Systematic</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Raffaele Savi's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Martin} alt="Martin" className="sub-member-icon" />
                    <h3>Martin Small</h3>
                    <p>Chief Financial Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Martin Small's bio
                    </button>
                </td>
            </tr><br/><br/><br/><br/>




            <tr>
                <td className="sub-member">
                    <img src={Derek} alt="Derek" className="sub-member-icon" />
                    <h3>Derek Stein</h3>
                    <p>Global Head of Technology & Operations</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Derek Stein's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Mark} alt="Mark" className="sub-member-icon" />
                    <h3>Mark Wiedman</h3>
                    <p>Head of the Global Client Business</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Mark Wiedman's bio
                    </button>
                </td>

            </tr>



            
        </tbody>
    </table>
</div>


<div className="explore-more-leadership">
  <div className="button-container">
  <button className="leadership-button-2">
            <span className="black-arrow">{'>'}</span>See our Board of Directors

 </button>
 <button className="leadership-button-2">
            <span className="black-arrow">{'>'}</span>See our Office of the Chairman
          </button>
  </div>
</div>


<div className="team-section-sub">
    <table className="team-table">
        <tbody>
            <tr>
                <td className="sub-member">
                    <img src={Hallac} alt="Hallac" className="sub-member-icon" />
                    <h3>Charlie Hallac</h3>
                    <p>IN MEMORIAM</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span>Read Charlie Hallac's bio
                    </button>
                </td>

            </tr>
            </tbody>
            </table>
            </div>

            <div className="explore-more">
  <h2>Learn more about BlackRock</h2>
  <div className="button-container">
  <Link to="/about-us" className="explore-button">
        <span className="red-arrow">{'>'}</span> About us
      </Link>
      <Link to="/history" className="explore-button">
        <span className="red-arrow">{'>'}</span>Our history
      </Link>
      <Link to="#" className="explore-button">
        <span className="red-arrow">{'>'}</span>Social Impact
      </Link>
  </div>
</div>

<Footer/>

<div className="legal-disclaimer-container">
      <p>© 2024 BlackRock, Inc. All rights reserved.</p>
</div>

     
    </div>
  );
};

export default Leadership;
