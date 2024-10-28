import React, { useEffect } from 'react';
import SmallNavBar from './SmallNavBar';
import Footer from './Footer';
import Navbar from './Navbar';
import './CSS/Principles.css';
import numberOneImage from '../image/number-1.png'; 
import numberTwoImage from '../image/number-2.png'; 
import numberThreeImage from '../image/number-3.png'; 
import numberFourImage from '../image/number-4.png'; 
import numberFiveImage from '../image/number-5.png'; 


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
      

      <div className='blackRock-principles'>
        <h2>The BlackRock principles</h2>
        <p>BlackRock’s purpose is to help more and more people experience financial well-being.</p>
        <p>We rely on our principles to guide how we interact with each other, our clients, the communities<br/>
         in which we operate, and all of our other stakeholders.</p>
         <p>These principles represent our core values, our aspirations, and our cultural language – lived<br/>
          and embraced by every employee at our firm.</p>
      </div>
     
     
      <div className="principles">
      <div className="principle">
        <img src={numberOneImage} alt="Number 1" className="number-image" />
        <div className="content">
          <h2>We are a fiduciary to our clients.</h2>
          <p><strong>Our clients’ interests come first.</strong></p>
          <p>The fiduciary mindset is the bedrock of our identity. It reflects<br/>
           our <strong>integrity</strong> and the <strong>unbiased advice</strong> we give our clients.</p>
          <p>And it’s what inspires us to come to work every day and <strong>help<br/> people build better futures.</strong></p>
        </div>
      </div>
      
      <div className="principle">
        <img src={numberTwoImage} alt="Number 2" className="number-image" />
        <div className="content">
          <h2>We are One BlackRock.</h2>
          <p>We work collaboratively, <strong>without silos and without turf</strong>, to<br/>
           create the best outcomes for our clients, our firm, and the<br/>
            communities where we operate.</p>
          <ul class="custom-list">
                    <li><strong>A diverse workforce</strong> is indispensable to our creativity and <br/>
                    success. It’s how we answer the biggest questions and solve <br/>
                    the toughest problems.</li>
                    <li><strong>An inclusive, equitable environment</strong> makes us thrive. It <br/>
                    enables us to draw on expertise and unique experiences <br/>
                    from across the firm and bring out the best in each other.</li>
                    <li><strong>Aladdin unifies us</strong>, creating a <strong>common language</strong> for us to<br/>
                     interpret the world, the markets, and our clients' needs.</li>
                </ul>

        </div>
      </div>

      <div className="principle">
        <img src={numberThreeImage} alt="Number 3" className="number-image" />
        <div className="content">
          <h2>We are passionate about performance..</h2>
          <p><strong>We are relentless</strong> about finding better ways to serve our<br/>
           clients and improve our firm. Since our founding, <strong>innovation</strong><br/>
            has been at the center of how we deliver performance and stay<br/>
             ahead of our clients’ needs.</p>
          <ul class="custom-list">
                    <li>We have <strong>continually reinvented </strong>our firm and our industry<br/>
                     to help people achieve their goals.</li>
                    <li>We are <strong>lifelong students</strong> – of markets, of technology, and <br/>of the world..</li>

                </ul>

        </div>
      </div>


      <div className="principle">
        <img src={numberFourImage} alt="Number 4" className="number-image" />
        <div className="content">
          <h2>We take emotional ownership.</h2>
          <p>The people we serve entrust us to help them prepare for the <br/>
          future. Our culture is defined by the <strong>deep sense of<br/>
          responsibility</strong> we feel to our clients and to each other.</p>
          <ul class="custom-list">
                    <li>In everything we do – from the <strong>investment performance</strong> we<br/>
                     deliver to the <strong>technology </strong>we develop – we are emotionally <br/>
                     invested in our clients’ futures.</li>
                    <li>We are equally invested in the success of <strong>our firm and our<br/>
                     colleagues.</strong> We hold ourselves and each other to the <br/>
                     <strong>highest standards of excellence.</strong></li>
                   
                </ul>

        </div>
      </div>


      <div className="principle">
        <img src={numberFiveImage} alt="Number 5" className="number-image" />
        <div className="content">
          <h2>We are committed to a better future.</h2>
          <p>We work collaboratively, <strong>without silos and without turf</strong>, to<br/>
           create the best outcomes for our clients, our firm, and the<br/>
            communities where we operate.</p>
          <ul class="custom-list">
                    <li><strong>A diverse workforce</strong> is indispensable to our creativity and <br/>
                    success. It’s how we answer the biggest questions and solve <br/>
                    the toughest problems.</li>
                    <li><strong>An inclusive, equitable environment</strong> makes us thrive. It <br/>
                    enables us to draw on expertise and unique experiences <br/>
                    from across the firm and bring out the best in each other.</li>
                    <li><strong>Aladdin unifies us</strong>, creating a <strong>common language</strong> for us to<br/>
                     interpret the world, the markets, and our clients' needs.</li>
                </ul>

        </div>
      </div>
    </div>      





      
    </div>
  );
};

export default PrincipalUI;
