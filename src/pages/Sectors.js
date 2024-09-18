import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Sector.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Sectors = () => {
  const performanceData = {
    labels: ['9am-11am', '11am-1pm', '1pm-3pm', '3pm-5pm'],
    datasets: [
      {
        label: 'Assigned',
        data: [5500, 4000, 4500, 3000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Completed Units',
        data: [4000, 3500, 3000, 2500],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const recruitmentData = {
    labels: ['2020', '2021', '2022', '2023', '2024 (proj.)'],
    datasets: [
      {
        label: 'Employees Hired (in thousands)',
        data: [4500, 4600, 4300, 5000, 3800],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="department-overview-content">
      <div className="section">
        <h2>Growth Rate</h2>
        {/* Replace with the line chart for Growth Rate */}
        <div className="chart-placeholder">Line Chart Placeholder</div>
      </div>

      <div className="section">
        <h2>Work Performance Analysis</h2>
        <div className="chart-container">
          <Bar data={performanceData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="section">
        <h2>Recruitment & Hired</h2>
        <div className="chart-container">
          <Bar data={recruitmentData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
      <div className='onel'>
      <div className="section">
        <h2>Employee Training & Development Programs</h2>
        <div className="details-link">View Details</div>
      </div>

      <div className="section">
        <h2>Workers Recognition & Rewards</h2>
        <div className="details-link">View Details</div>
      </div>
      </div>
      <div className="section">
        <h2>Events</h2>
        <div className="events-placeholder">Events Section Placeholder</div>
      </div>

      <div className="section partners">
        <h2>Our Partners</h2>
        <div className="partners-placeholder">Partners Logos</div>
      </div>

      <div className="button-group">
        <button>Health & Safety</button>
        <button>Employee Satisfaction</button>
        <button>Customer Review</button>
        <button>Future Goals</button>
      </div>
    </div>
  );
};

export default Sectors;
