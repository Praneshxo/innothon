// src/components/Header.js
import React from 'react';
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
          <img src="user-avatar-placeholder.png" alt="User" className="user-avatar" />
          <div>
            <p>Good Morning!</p>
            <h2>Ms. Mythili Soundhararajan</h2>
          </div>
        </div>
        <div className="header-date">
          <p>{currentDate}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
