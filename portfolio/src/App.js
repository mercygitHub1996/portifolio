import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1>This is my portfolio</h1>
      </header>
      <div className="layout">
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main">
          <button className="toggle-button" onClick={toggleTheme}>
          {theme == "light" ? (
        <FaToggleOn size={24} color="green" /> // Display toggle on icon with styling
      ) : (
        <FaToggleOff size={24} color="gray" /> // Display toggle off icon with styling
      )}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
