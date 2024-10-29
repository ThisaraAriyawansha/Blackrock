import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SmallNavbar from './components/SmallNavBar'
import Footer from './components/Footer';
import Content from './components/FooterContents';
import AboutUs from './components/AboutUs';
import Principles  from './components/Principles';
import Leadership from './components/Leadership';
import History from './components/History';
import Impact from './components/Impact';
import Contacts from './components/Contacts';
import Business from './components/Business';
import NewsOverview from './components/Overview';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/smallNavbar" element={<SmallNavbar />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/history" element={<History />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/business" element={<Business />} />
          <Route path="/newsOverview" element={<NewsOverview />} />






        </Routes>
      </div>
    </Router>
  );
}

export default App;
