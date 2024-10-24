import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SmallNavbar from './components/SmallNavBar'
import Footer from './components/Footer';
import Content from './components/FooterContents';

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


        </Routes>
      </div>
    </Router>
  );
}

export default App;
