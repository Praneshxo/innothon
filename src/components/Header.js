// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import only needed icons
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
        </div>

        <div className="header-date">
          <p>{currentDate}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
