import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SmallNavbar from './components/SmallNavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/smallNavbar" element={<SmallNavbar />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
