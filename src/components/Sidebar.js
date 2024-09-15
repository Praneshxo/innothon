// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUsers, faCalendar, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="logo-placeholder.png" alt="Logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faChartPie} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/enquiries">
              <FontAwesomeIcon icon={faUsers} /> Enquiries
            </Link>
          </li>
          <li>
            <Link to="/schedule">
              <FontAwesomeIcon icon={faCalendar} /> Schedule
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FontAwesomeIcon icon={faCog} /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
