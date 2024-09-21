import React, { useState } from "react";
import './Schedule.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this line is added
// Import Font Awesome

const meetingsData = [
  { id: 1, date: "Sep 23, 2024", description: "Conference", members: "Camio" },
  { id: 2, date: "Nov 5, 2024", description: "Discussion", members: "John" },
  { id: 3, date: "Oct 29, 2024", description: "Consultation", members: "James" },
  { id: 4, date: "Dec 10, 2024", description: "Indexing", members: "Charles" },
  { id: 5, date: "Jan 19, 2024", description: "Archiving", members: "Rijo" },
  { id: 6, date: "Mar 30, 2024", description: "Optimization", members: "Albert" },
  { id: 7, date: "Apr 1, 2024", description: "Recovery", members: "Jobert" }
];

const eventsData = [];

const SchedulePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="schedule-page">
      <h2>Schedule</h2>
      <div className="header-row">
        <div className="tabs-and-icon">
          <button
            className={`tab-button ${selectedTab === 0 ? "active" : ""}`}
            onClick={() => handleTabChange(0)}
          >
            Meetings
          </button>
          <button
            className={`tab-button ${selectedTab === 1 ? "active" : ""}`}
            onClick={() => handleTabChange(1)}
          >
            Events
          </button>
          <div className="calendar-icon">
            <i className="fas fa-calendar-alt"></i> {/* Calendar Icon */}
          </div>
        </div>
      </div>

      {selectedTab === 0 && (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Members</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {meetingsData.map((meeting) => (
              <tr key={meeting.id}>
                <td>{meeting.id}</td>
                <td>{meeting.date}</td>
                <td>{meeting.description}</td>
                <td>{meeting.members}</td>
                <td>
                  <button className="view-button">
                    <i className="fas fa-eye"></i> View {/* Eye Icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedTab === 1 && (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Members</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {eventsData.length > 0 ? (
              eventsData.map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.date}</td>
                  <td>{event.description}</td>
                  <td>{event.members}</td>
                  <td>
                    <button className="view-button">
                      <i className="fas fa-eye"></i> View {/* Eye Icon */}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} align="center">
                  No Events Scheduled
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SchedulePage;