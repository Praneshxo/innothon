import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Maintenance.css';
ChartJS.register(ArcElement, Tooltip, Legend);

const MaintenancePage = () => {
  // Pie chart data for Downtime section
  const pieData = {
    labels: ['Downtime', 'Cost'],
    datasets: [
      {
        label: '# of Votes',
        data: [70, 30],
        backgroundColor: ['#0066FF', '#FF6384'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="maintenance-page-content">
      {/* On Process Section */}
      <div className="on-process">
        <h3>On Process</h3>
        <div className="process-list">
          {[
            { id: 'R-1001', description: 'Broken light fix', assigned: 'David' },
            { id: 'R-1002', description: 'Damaged motor', assigned: 'Joel' },
            { id: 'R-1006', description: 'Production machine', assigned: 'Olivia' },
            { id: 'R-1004', description: 'Broken Wire', assigned: 'Emana' },
          ].map((item) => (
            <div className="process-item" key={item.id}>
              <div className="process-id">{item.id}</div>
              <div className="process-description">{item.description}</div>
              <div className="process-assigned">{item.assigned}</div>
              <a href="#" className="view-link">View</a>
            </div>
          ))}
        </div>
      </div>

      {/* Task Section */}
      <div className="task-section">
        <h2>Task</h2>
        <ul className="task-list">
          <li>Check oil <span>Aug 15 2023 - Aug 19 2023</span></li>
          <li>Replace Rotor <span>Oct 10 2023 - Oct 25 2023</span></li>
          <li>Fluid Check <span>Apr 4 2023 - Apr 19 2023</span></li>
          <li>Fire Drill <span>Dec 15 2023 - Dec 30 2023</span></li>
        </ul>
      </div>

      {/* Overview Section */}
      <div className="overview-section">
        <h2>Overview</h2>
        <div className="overview-stats">
          <div className="stat-item">
            <span>Downtime</span> <span className="stat-value">49%</span>
          </div>
          <div className="stat-item">
            <span>Reduced Output</span> <span className="stat-value">23%</span>
          </div>
          <div className="stat-item">
            <span>Efficiency Drop</span> <span className="stat-value">13%</span>
          </div>
          <div className="stat-item">
            <span>Quality Issues</span> <span className="stat-value">10%</span>
          </div>
        </div>
      </div>

      {/* Downtime Pie Chart */}
      <div className="downtime-chart-section">
        <h2>Downtime</h2>
        <div className="chart-container">
          <Pie data={pieData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
