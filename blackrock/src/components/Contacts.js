import React, { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import SmallNavBar from './SmallNavBar';
import './CSS/Contacts.css';

const Contacts = () => {
  useEffect(() => {
    document.title = "BlackRock Contacts and World Wide"; // Set the page title
  }, []);

  const [activeTab, setActiveTab] = useState("North America");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
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
        <div className='Worldwide'>
            <h1>BlackRock Worldwide</h1>
            <p>As we expand our capabilities globally, BlackRock continues to<br/>
             focus locally. Our nearly 16,000 colleagues work from 89<br/>
              offices in 38 countries, helping people from all walks of life<br/>
               around the world to reach their investing goals.</p>
            <h1>Browse offices by region</h1>
        </div>

<div className='locationn'>
        <nav className="tabs">
        {["North America", "South America", "Europe", "The Middle East", "Africa", "Asia-Pacific"].map((region) => (
            <button
                key={region}
                className={`tab ${activeTab === region ? "active" : ""}`}
                onClick={() => handleTabClick(region)}
                >
                {region}
                </button>

        ))}
      </nav>

      <div className="content">
        {activeTab === "North America" && (
          <div>
            <h2>North America</h2>
              <div>
               
              <table className='location-table'>
    <tr>
        <td>
            <strong>Atlanta</strong>
            725 Ponce de Leon Ave NE<br/>
            Atlanta, GA<br/>
            USA 30306<br/>
            Phone: 470-520-5000
        </td>
        <td>
            <strong>Boston</strong>
            60 State Street<br/>
            Boston, MA,<br/>
            USA 02109<br/>
            Phone: 617-357-1200
        </td>
        <td>
            <strong>Chicago</strong>
            227 West Monroe Street,<br/>
            Chicago, IL,<br/>
            USA 60606<br/>
            Phone: 312-395-9300
        </td>
    </tr>
    <tr>
        <td>
            <strong>Dallas</strong>
            5910 North Central Expressway,<br/>
            Dallas, TX,<br/>
            USA 75206<br/>
            Phone: 214-346-7340
        </td>
        <td>
            <strong>Denver</strong>
            44 Cook Street<br/>
            Denver, CO, 80206<br/>
            United States<br/>
            Phone: 303-468-5500
        </td>
        <td>
            <strong>Greenwich</strong>
            One Lafayette Place,<br/>
            Greenwich, CT,<br/>
            USA 06830<br/>
            Phone: 203-863-6000
        </td>
    </tr>
    <tr>
        <td>
            <strong>Houston</strong>
            4201 Main St.<br/>
            Suite 200<br/>
            Houston, TX,<br/>
            USA 77002
        </td>
        <td>
            <strong>Mexico City</strong>
            Torre Virreyes<br/>
            Pedregal 24<br/>
            Col. Molino del Rey<br/>
            Del. Miguel Hidalgo<br/>
            México City, México 11040<br/>
            Phone: 52-55-5241-4300
        </td>
        <td>
            <strong>Miami</strong>
            701 Brickell Avenue, Suite 1250<br/>
            Miami, FL,<br/>
            USA 33131<br/>
            Phone: 305-358-1171
        </td>
    </tr>
    <tr>
        <td>
            <strong>Montreal</strong>
            1000 Sherbrooke Street West<br/>
            Montreal, Quebec,<br/>
            Canada H3A 0A6<br/>
            Phone: 514-843-5128
        </td>
        <td>
            <strong>New York</strong>
            50 Hudson Yards<br/>
            New York,<br/>
            NY 10001<br/>
            Phone: 212-810-5800
        </td>
        <td>
            <strong>Newport Beach</strong>
            4400 MacArthur Boulevard<br/>
            Newport Beach, CA,<br/>
            USA 92660<br/>
            Phone: 949-623-0700
        </td>
    </tr>
    <tr>
        <td>
            <strong>Palo Alto</strong>
            820 Ramona Street<br/>
            Palo Alto<br/>
            CA 94301<br/>
            Phone: 650-614-0330
        </td>
        <td>
            <strong>Philadelphia</strong>
            2929 Arch Street,<br/>
            Philadelphia, PA,<br/>
            USA 19104<br/>
            Phone: 215-349-9700
        </td>
        <td>
            <strong>Princeton</strong>
            1 University Square Drive,<br/>
            Princeton, NJ,<br/>
            USA 08540<br/>
            Phone: 609-282-2000
        </td>
    </tr>
    <tr>
        <td>
            <strong>San Francisco</strong>
            400 Howard Street<br/>
            San Francisco, CA,<br/>
            USA 94105<br/>
            Phone: 415-670-2000
        </td>
        <td>
            <strong>Santa Monica</strong>
            2951 28th Street, Suite 1000<br/>
            Santa Monica, CA<br/>
            USA 90405<br/>
            Phone: 310-566-1000
        </td>
        <td>
            <strong>Seattle</strong>
            601 Union Street<br/>
            Seattle, WA,<br/>
            USA 98101<br/>
            Phone: 206-613-6700
        </td>
    </tr>
    <tr>
        <td>
            <strong>Toronto</strong>
            161 Bay Street<br/>
            Toronto, Ontario,<br/>
            Canada, M5J 2S1<br/>
            Phone: 416-643-4000
        </td>
        <td>
            <strong>Washington</strong>
            1401 New York Avenue NW<b/>
            Washington, DC 20005<br/>
            United States<br/>
            Phone: 202-414-2100
        </td>
        <td>
            <strong>West Palm Beach</strong>
            360 S Rosemary Ave<br/>
            Suite 1600<br/>
            West Palm Beach FL 33401<br/>
            Phone: 581-584-9700
        </td>
    </tr>
    <tr>
        <td>
            <strong>Wilmington </strong>
            100 Bellevue Parkway<br/>
            Wilmington, DE,<br/>
            USA 19809<br/>
            Phone: 302-797-2000
        </td>
        <td>
            <strong>Wilmington </strong>
            400 Bellevue Parkway<br/>
            Wilmington, DE,<br/>
            USA 19809<br/>
            Phone: 302-797-2000
        </td>
        
    </tr>
</table>


               
              </div>
            </div>
        )}
        {activeTab === "South America" && (
          <div>
            <h2>South America</h2>
            <p>
            <table className='location-table'>

    <tr>
        <td>
            <strong>Bogotá</strong><br/>
            Calle 84 A # 9-65<br/>
            Oficina 501<br/>
            Bogotá, 110231<br/>
            Colombia<br/>
            Phone: +57 (1) 319 2598
        </td>
        <td>
            <strong>Santiago</strong><br/>
            Avenida Isidora Goyenechea N 3000<br/>
            Edificio Isidora Tres Mil<br/>
            Santiago, Chile<br/>
            Phone: 56 2 577 9600
        </td>
        <td>
            <strong>São Paulo</strong><br/>
            Complexo JK Iguatemi<br/>
            Av Presidente Juscelino Kubitschek, 2.041<br/>
            Torre E - Conj. B<br/>
            04543-011 - São Paulo, Brazil<br/>
            Phone: 55 11 3028 4100
        </td>
    </tr>
</table>
            </p>
          </div>
        )}
        {activeTab === "Europe" && (
          <div>
            <h2>Europe</h2>
            <p>
              <div>
               
              <table className='location-table'>
  <tr>
    <td>
      <strong>Amsterdam</strong><br />
      Amstelplein 1, Rembrandt Tower<br />
      Netherlands 1096 HA<br />
      Phone: 31 (0) 20 549 5200
    </td>
    <td>
      <strong>Belgrade</strong><br />
      Skyline tower, 25th floor<br />
      Kneza Miloša 88<br />
      Belgrade 11000, Serbia
    </td>
    <td>
      <strong>Brussels</strong><br />
      Square De Meeus 35<br />
      Brussels, Belgium B-1000<br />
      Phone: 32 (0) 2 402 4900
    </td>
  </tr>
  <tr>
    <td>
      <strong>Budapest</strong><br />
      White House<br />
      47 Vaci Ut, District XIII<br />
      Budapest, Hungary<br />
      Phone: +36 1 686 0000
    </td>
    <td>
      <strong>Copenhagen</strong><br />
      Sundkrogsgade 21, Harbour House<br />
      Copenhagen, Denmark 2100<br />
      Phone: 45 3910 8000
    </td>
    <td>
      <strong>Dublin</strong><br />
      2 Ballsbridge Park, Ballsbridge<br />
      Dublin, D04 YW83<br />
      Phone: 353 1 246 7000
    </td>
  </tr>
  <tr>
    <td>
      <strong>Edinburgh</strong><br />
      Exchange Place One, 1 Semple Street<br />
      Edinburgh, UK EH3 8BL<br />
      Phone: 44 131 472 7200
    </td>
    <td>
      <strong>Frankfurt</strong><br />
      Bockenheimer Landstrasse 2-4, OpernTurm Complex<br />
      Frankfurt, Germany D-60306<br />
      Phone: 49 69 50 500 3199
    </td>
    <td>
      <strong>Geneva</strong><br />
      Passage des Lions 6<br />
      Geneva 1204, Switzerland<br />
      Phone: 41 44 297 73 73
    </td>
  </tr>
  <tr>
    <td>
      <strong>Helsinki</strong><br />
      c/o Regus Luna House<br />
      Mannerheimintie 12B<br />
      00100 Helsinki, Finland<br />
      Phone: 358 (0) 800 918 277
    </td>
    <td>
      <strong>London</strong><br />
      12 Throgmorton Avenue, Drapers Gardens<br />
      London EC2N 2DL, United Kingdom<br />
      Phone: 44 020 7743 3000
    </td>
    <td>
      <strong>Luxembourg (1)</strong><br />
      26B Boulevard Royal<br />
      Luxembourg 2449, Luxembourg<br />
      Phone: 35 228 290 400
    </td>
  </tr>
  <tr>
    <td>
      <strong>Luxembourg (2)</strong><br />
      35a Avenue J.F. Kennedy<br />
      L-1855, Luxembourg<br />
      Phone: 352 34 2010 4201
    </td>
    <td>
      <strong>Madrid</strong><br />
      Plaza Pablo Ruiz Picasso, nº1, Torre Picasso<br />
      Madrid, Spain<br />
      Phone: 34 917 88 94 00
    </td>
    <td>
      <strong>Milan</strong><br />
      Piazza San Fedele 2<br />
      Milan, Italy 20121<br />
      Phone: 39 0291 5971
    </td>
  </tr>
  <tr>
    <td>
      <strong>Munich</strong><br />
      Lenbachplatz 1, 1st FL<br />
      Munich, Germany 80333-MN3<br />
      Phone: 49 89 42729 5899
    </td>
    <td>
      <strong>Paris (1)</strong><br />
      Le Centorial, 16-18 rue du Quatre Septembre<br />
      Paris, France 75002<br />
      Phone: 33 156 43 2900
    </td>
    <td>
      <strong>Paris (2)</strong><br />
      2-4 Rue Louis David<br />
      Paris 75116, France<br />
      Phone: 33 1809 88100
    </td>
  </tr>
  <tr>
    <td>
      <strong>Stockholm</strong><br />
      Malmskillnadsgatan 32<br />
      111 51 Stockholm, Sweden<br />
      Phone: 46 08 505 726 00
    </td>
    <td>
      <strong>Vienna</strong><br />
      Tuchlauben Complex, Seitzergasse 6/6<br />
      1010 Vienna, Austria<br />
      Phone: 43 (1) 253 3400
    </td>
    <td>
      <strong>Zurich</strong><br />
      Bahnhofstrasse 39<br />
      CH-8001 Zurich, Switzerland<br />
      Phone: 41 44 297 7373
    </td>
  </tr>
</table>


               
              </div>
            </p>
          </div>
        )}
        {activeTab === "The Middle East" && (
          <div>
            <h2>The Middle East</h2>
            <table className='location-table'>

    <tr>
        <td>
            <strong>Dubai (1)</strong><br/>
            ICD Brookfield Place<br/>
            312 Al Mustaqbal St, Trade Centre DIFC<br/>
            Unit 15-01<br/>
            DIFC Dubai<br/>
            United Arab Emirates<br/>
            Phone: 971 4450 0700
        </td>
        <td>
            <strong>Riyadh</strong><br/>
            Laysen Valley, Building 7976<br/>
            Salim Ibn Abi Bakr Shaikan St<br/>
            West Umm Al Hamam District, 2223-12329<br/>
            Riyadh, Saudi Arabia<br/>
            Phone: +966 11 8383600
        </td>
        <td>
            <strong>Tel Aviv</strong><br/>
            94 Yigal Alon Street<br/>
            Alon 1 Tower<br/>
            20th Floor<br/>
            Tel Aviv 6783139
        </td>
    </tr>
</table>

          </div>
        )}
        {activeTab === "Africa" && (
          <div>
            <h2>Africa</h2>
            <table className='location-table'>

    <tr>
        <td>
            <strong>Cape Town</strong><br/>
            V & A Waterfront<br/>
            Dock Road Building Corner Stanley & Dock Road Junction<br/>
            Cape Town 8000<br/>
            South Africa<br/>
            Phone: +27 (0) 21 403 6441
        </td>
    </tr>
</table>

          </div>
        )}
        {activeTab === "Asia-Pacific" && (
          <div>
            <h2>Asia-Pacific</h2>
            <table className='location-table'>
    <tr>
        <td>
            <strong>Bogotá</strong><br/>
            Calle 84 A # 9-65<br/>
            Oficina 501<br/>
            Bogotá, 110231<br/>
            Colombia<br/>
            Phone: +57 (1) 319 2598
        </td>
        <td>
            <strong>Santiago</strong><br/>
            Avenida Isidora Goyenechea N 3000<br/>
            Edificio Isidora Tres Mil<br/>
            Santiago, Chile<br/>
            Phone: 56 2 577 9600
        </td>
        <td>
            <strong>São Paulo</strong><br/>
            Complexo JK Iguatemi<br/>
            Av Presidente Juscelino Kubitschek, 2.041<br/>
            Torre E - Conj. B<br/>
            04543-011 - São Paulo, Brazil<br/>
            Phone: 55 11 3028 4100
        </td>
    </tr>
    <tr>
        <td>
            <strong>Dubai (1)</strong><br/>
            ICD Brookfield Place<br/>
            312 Al Mustaqbal St, Trade Centre DIFC<br/>
            Unit 15-01<br/>
            DIFC Dubai<br/>
            United Arab Emirates<br/>
            Phone: 971 4450 0700
        </td>
        <td>
            <strong>Riyadh</strong><br/>
            Laysen Valley, Building 7976<br/>
            Salim Ibn Abi Bakr Shaikan St<br/>
            West Umm Al Hamam District, 2223-12329<br/>
            Riyadh, Saudi Arabia<br/>
            Phone: +966 11 8383600
        </td>
        <td>
            <strong>Tel Aviv</strong><br/>
            94 Yigal Alon Street<br/>
            Alon 1 Tower<br/>
            20th Floor<br/>
            Tel Aviv 6783139
        </td>
    </tr>
    <tr>
        <td>
            <strong>Cape Town</strong><br/>
            V & A Waterfront<br/>
            Dock Road Building Corner Stanley & Dock Road Junction<br/>
            Cape Town 8000<br/>
            South Africa<br/>
            Phone: +27 (0) 21 403 6441
        </td>
        <td>
            <strong>Auckland</strong><br/>
            15 Customs Street West<br/>
            Auckland, Auckland 1010<br/>
            New Zealand<br/>
            Phone: 64 9980 1010
        </td>
        <td>
            <strong>Bengaluru</strong><br/>
            INDIQUBE Alpha,<br/>
            Plot No 19/4 & 27, Wing-A,<br/>
            Kadubisanahalli,<br/>
            Outer Ring Road<br/>
            Bengaluru – 560103<br/>
            India
        </td>
    </tr>
    <tr>
        <td>
            <strong>Beijing</strong><br/>
            No. 6 Wudinghou Street<br/>
            Excel Center,<br/>
            Xi Cheng District, Beijing,<br/>
            China 100032<br/>
            Phone: 86 106 619 0500
        </td>
        <td>
            <strong>Brisbane</strong><br/>
            Waterfront Place<br/>
            1 Eagle Street<br/>
            Brisbane QLD 4000<br/>
            Australia<br/>
            Phone: 617 3234 7000
        </td>
        <td>
            <strong>Gurgaon</strong><br/>
            DLF Cyber City<br/>
            Building No. 14 Tower C<br/>
            Gurgaon 122002<br/>
            India<br/>
            Phone: 91 124 678 0000
        </td>
    </tr>
    <tr>
        <td>
            <strong>Hong Kong</strong><br/>
            16/F Champion Tower<br/>
            Three Garden Road<br/>
            Central<br/>
            Hong Kong<br/>
            Phone: 852 3903 2800
        </td>
        <td>
            <strong>Melbourne</strong><br/>
            477 Collins Street<br/>
            Melbourne VIC 3000<br/>
            Australia<br/>
            Phone: 613 9657 3000
        </td>
        <td>
            <strong>Mumbai</strong><br/>
            Nesco IT Building III<br/>
            Nesco IT Park<br/>
            Mumbai 400063<br/>
            India<br/>
            Phone: 91 22 6187 3500
        </td>
    </tr>
    <tr>
        <td>
            <strong>Seoul</strong><br/>
            136 Sejong-Daero<br/>
            Seoul Finance Centre<br/>
            Seoul 04520<br/>
            Korea<br/>
            Phone: 82 2751 0500
        </td>
        <td>
            <strong>Shanghai (1)</strong><br/>
            Azia Center<br/>
            1233 Lujiazui Ring Road<br/>
            Pudong, Shanghai<br/>
            China<br/>
            Phone: 8621 8022 5188
        </td>
        <td>
            <strong>Shanghai (2)</strong><br/>
            Lujiazui Financial Plaza<br/>
            826 Century Avenue<br/>
            22nd Floor<br/>
            Shanghai Shi<br/>
            200002<br/>
            China<br/>
            Phone: +8621 80307000
        </td>
    </tr>
    <tr>
        <td>
            <strong>Singapore (1)</strong><br/>
            Twenty Anson<br/>
            20 Anson Road<br/>
            Singapore 079912<br/>
            Phone: 65 6411 3000
        </td>
        <td>
            <strong>Singapore (2)</strong><br/>
            Asia Square Tower 1<br/>
            8 Marina View<br/>
            Singapore, Singapore 018960<br/>
            Phone: 65 6411 3000
        </td>
        <td>
            <strong>Sydney</strong><br/>
            Chifley Tower<br/>
            2 Chifley Square<br/>
            Sydney, Australia<br/>
            NSW 2000<br/>
            Phone: 612 9272 2200
        </td>
    </tr>
    <tr>
        <td>
            <strong>Taipei</strong><br/>
            No. 100 Songren Road<br/>
            Nan Shan Plaza<br/>
            Taipei City 110, Taiwan<br/>
            Phone: 886 2 2326 1600
        </td>
        <td>
            <strong>Tokyo</strong><br/>
            1-8-3 Marunouchi, Chiyoda-ku<br/>
            Marunouchi Trust Main Tower<br/>
            Tokyo, Japan 100-8217<br/>
            Phone: 81 3 6703 4100
        </td>
    </tr>
</table>
          </div>
        )}
      </div>
      </div>

      <div className="explore-more">
  <h2>Learn more about BlackRock</h2>
  <div className="button-container">
  <Link to="/about-us" className="explore-button">
        <span className="red-arrow">{'>'}</span> About us
      </Link>
      <Link to="/leadership" className="explore-button">
        <span className="red-arrow">{'>'}</span>Leadership
      </Link>

  </div>
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