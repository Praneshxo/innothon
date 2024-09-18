import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; // Assuming all the necessary styles

const DashboardContent = () => {
  // Handle to-do checkbox state
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Check employee clock-ins', done: false },
    { id: 2, task: 'Schedule interviews for candidates.', done: false },
    { id: 3, task: 'Update shift schedules for the next week.', done: false },
    { id: 4, task: 'Organize HR meetings on ongoing projects.', done: false },
    { id: 5, task: 'Prepare a summary of recruitment.', done: false },
    { id: 6, task: 'Handle payroll inquiries.', done: false },
    { id: 7, task: 'Analyze turnover rates.', done: false },
  ]);

  // Handle new task input
  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    // Fade out animation before removing the task
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, removing: true } : task
      )
    );

    // Delay removal for animation
    setTimeout(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, 500); // Animation delay (matches CSS transition)
  };

  // Function to add new task
  const addTask = () => {
    if (newTask.trim() === "") return; // Avoid empty tasks
    setTasks([...tasks, { id: Date.now(), task: newTask, done: false }]);
    setNewTask(""); // Clear input after adding
  };

  return (
    <div className="dashboard-content">
      {/* First Row - Daily Attendance and Today's To-do */}
      <div className="row">
        {/* Daily Attendance */}
        <div className="card daily-attendance">
          <div className="card-header">
            <h2>Daily attendance</h2>
            <a href="#">view more</a>
          </div>
          <div className="attendance-chart">
            <div className="pie-chart">
              <div className="pie-segment"></div>
              <div className="inner-circle">
                <span className="chart-number">5200</span>
              </div>
            </div>
          </div>
          <div className="attendance-details">
            <div className="attendance-item">
              <p>On time<span className="value">4965</span></p>
              <p>On leave<span className="value">20</span></p>
              <p>Late<span className="value">15</span></p>
            </div>
          </div>
          <div className="attendance-summary">
            <p>Attendance overview</p>
            <div className="summary-stats">
              <p>Last week <strong>97%</strong></p>
              <p>Today <strong>98.5%</strong></p>
              <p>Today <strong>99.3%</strong></p>
            </div>
          </div>
        </div>
        
        {/* Today's To-do */}
        <div className="card todo-list-container">
          <div className="card-header">
            <h2>Today's to-do</h2>
            <button className="icon-button" onClick={addTask}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="todo-list">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className={`todo-item ${task.removing ? 'fade-out' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.task}</span>
              </div>
            ))}
          </div>
          {/* Input for adding a new task */}
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
          />
        </div>
      </div>
      
      {/* Second Row - Enquiries and Work Update */}
      <div className="row">
        {/* Enquiries */}
        <div className="card enquiries">
          <div className="card-header">
            <h2>Enquiries</h2>
            <a href="#">view more</a>
          </div>
          <div className="enquiry-list">
            {[
              { title: 'Quality Assurance', time: '10:20 AM', count: '10+' },
              { title: 'Finance and Administration', time: 'Yesterday', count: '2' },
              { title: 'Engineering', time: 'Yesterday', count: '4' },
              { title: 'Maintenance', time: 'Viewed', count: null }
            ].map((enquiry, index) => (
              <div key={index} className="enquiry-item">
                <div className="enquiry-info">
                  <h3>{enquiry.title}</h3>
                  <p>{enquiry.time}</p>
                </div>
                {enquiry.count && <span className="enquiry-count">{enquiry.count}</span>}
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Update */}
        <div className="card work-update">
          <div className="card-header">
            <h2>Work update</h2>
          </div>
          <div className="work-update-list">
            {[
              { name: 'Ms. Lily Bloom', message: 'Here is the report on quality performance indicators...', image: 'lily.jpg' },
              { name: 'Mr. Ryle Viraaj', message: 'Latest update on financial activities, including completed...', image: 'ryle.jpg' },
              { name: 'Ms. Caroline Daisy', message: 'Here’s an update on this week’s engineering tasks...', image: 'caroline.jpg' },
              { name: 'Mr. Shanshank Gupta', message: 'Here’s the administrative report outlining recent office...', image: 'shanshank.jpg' }
            ].map((update, index) => (
              <div key={index} className="work-update-item">
                <img className="avatar" src={update.image} alt={update.name} />
                <div className="update-info">
                  <h3>{update.name}</h3>
                  <p>{update.message}</p>
                </div>
                <button className="icon-button">
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
