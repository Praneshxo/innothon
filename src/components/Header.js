// src/components/Header.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { NavLink } from 'react-router-dom';
import './Header.css';
import Chatbot from '../pages/Chatbot';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="user-info">
          <img src="nokia.webp" alt="User" className="user-avatar" />
          <div className="cn">
            <h2 className="GM">Good Morning!</h2>
            <p className="MP">Ms. Mythili Soundhararajan</p>
          </div>
        </div>

        <div className="header-icons">
          <NavLink to="/home" activeClassName="active">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </NavLink>
          <button onClick={toggleChatbot} className="chatbot-icon">
            {/* Replace with your preferred chatbot icon */}
            🤖
          </button>
        </div>

        <div className="header-date">
          <p>{currentDate}</p>
        </div>
      </div>

      {isChatbotOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-content">
            <button onClick={toggleChatbot} className="close-button">X</button>
            <Chatbot />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
