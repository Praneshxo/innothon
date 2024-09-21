// src/pages/Dashboard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faBriefcase, faUser, faCubes, faKey, faQuestionCircle, faWheelchair, faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './Settings.css'; // Import your CSS styles

const Settings = () => {
  return (
    <div className="Settings">
      <h1 className="profile-heading">Profile</h1>
      {/* Profile Section */}
      <div className="profile-header">

        <div className="profile-info">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="profile-image"
          />
          
          <div className="profile-details">
             {/* Added Profile Heading */}
            <h2>Florence Pugh</h2>
            <p className="profile-id">H456789</p>
            <p>HR Manager</p>
          </div>
        </div>
        <div className="appearance-edit">
          <button className="edit-btn">
            <FontAwesomeIcon icon={faPencilAlt} size="lg" />
          </button>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="settings-grid">
        <button className="settings-button">
          <FontAwesomeIcon icon={faWrench} size="lg" /> General
        </button>
        <button className="settings-button">
          <FontAwesomeIcon icon={faBriefcase} size="lg" /> Sector Settings
        </button>
        <button className="settings-button">
          <FontAwesomeIcon icon={faUser} size="lg" /> Employee Settings
        </button>
        <button className="settings-button">
          <FontAwesomeIcon icon={faCubes} size="lg" /> API Settings
        </button>
        <button className="settings-button">
          <FontAwesomeIcon icon={faKey} size="lg" /> Access Permission
        </button>
        <button className="settings-button">
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" /> Help & Support
        </button>
        <button className="settings-button">
          <FontAwesomeIcon icon={faWheelchair} size="lg" /> Accessibility
        </button>
      </div>
    </div>
  );
};

export default Settings;