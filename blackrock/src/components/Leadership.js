import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import Larry from '../image/larry-fink-200x200.webp';
import Rob from '../image/kapito-rob-200x200.webp';

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
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>


            <tr>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>





            <tr>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>




            <tr>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>




            <tr>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>





            <tr>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>




            <tr>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>




            <tr>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Rob} alt="Rob" className="sub-member-icon" />
                    <h3>Rob Kapito</h3>
                    <p>President</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Rob Kapito's bio
                    </button>
                </td>
                <td className="sub-member">
                    <img src={Larry} alt="Larry" className="sub-member-icon" />
                    <h3>Larry Fink</h3>
                    <p>Chairman and Chief Executive Officer</p>
                    <button className="leadership-button"> {/* Changed class name */}
                        <span className="red-arrow">{'>'}</span> Read Larry Fink's bio
                    </button>
                </td>
            </tr>



            
        </tbody>
    </table>
</div>




     
    </div>
  );
};

export default Leadership;
