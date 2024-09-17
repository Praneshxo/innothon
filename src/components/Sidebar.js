import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserTie, faClock, faCogs, faMoneyCheckAlt, faCalendarAlt, faTools, faEnvelopeOpenText, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Ensure the CSS file path is correct

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Add a logo container here */}
      <div className="logo-container">
        <img src="logo.jpeg" alt="Your Logo" />
      </div>
      <NavLink to="/home" activeClassName="active">
        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/recruitment" activeClassName="active">
        <FontAwesomeIcon icon={faUserTie} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/shift-schedule" activeClassName="active">
        <FontAwesomeIcon icon={faClock} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/sectors" activeClassName="active">
        <FontAwesomeIcon icon={faCogs} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/payroll" activeClassName="active">
        <FontAwesomeIcon icon={faMoneyCheckAlt} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/schedule" activeClassName="active">
        <FontAwesomeIcon icon={faCalendarAlt} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/maintenance" activeClassName="active">
        <FontAwesomeIcon icon={faTools} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/request" activeClassName="active">
        <FontAwesomeIcon icon={faEnvelopeOpenText} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/settings" activeClassName="active">
        <FontAwesomeIcon icon={faSlidersH} className="sidebar-icon" />
      </NavLink>
    </div>
  );
}

export default Sidebar;