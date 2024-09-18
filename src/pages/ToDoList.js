import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskDetails, setTaskDetails] = useState({
    taskName: '',
    startDate: '',
    endDate: '',
    assignedTo: '',
    description: ''
  });

  useEffect(() => {
    // Fetch existing tasks from the backend
    axios.get('/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleAddTask = async () => {
    try {
      const response = await axios.post('/api/tasks', taskDetails);
      setTasks([...tasks, response.data]);
      setModalOpen(false);
      setTaskDetails({
        taskName: '',
        startDate: '',
        endDate: '',
        assignedTo: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;

    setTasks(updatedTasks);

    if (updatedTasks[index].done) {
      setTimeout(() => {
        setTasks((prev) => prev.filter((_, i) => i !== index));
      }, 1000); // Adjust time as needed
    }
  };

  return (
    <div className="todo-list">
      <div className="card-header">
        <h2>Today's to-do</h2>
        <button className="plus-button" onClick={openModal}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="todo-items">
        {tasks.map((task, index) => (
          <div key={index} className={`todo-item ${task.done ? 'fade-out' : ''}`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />
            <span className={task.done ? 'fade-text' : ''}>{task.taskName}</span>
          </div>
        ))}
      </div>

      {/* Modal for adding a new task */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Task</h3>

            <label>Task Name</label>
            <input
              type="text"
              name="taskName"
              value={taskDetails.taskName}
              onChange={handleInputChange}
              placeholder="Task name"
            />

            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={taskDetails.startDate}
              onChange={handleInputChange}
            />

            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={taskDetails.endDate}
              onChange={handleInputChange}
            />

            <label>Assigned To</label>
            <div className="assigned-to">
              <FontAwesomeIcon icon={faUserCircle} className="person-icon" />
              <button className="plus-icon">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <label>Description</label>
            <textarea
              name="description"
              value={taskDetails.description}
              onChange={handleInputChange}
              placeholder="Description..."
            ></textarea>

            <div className="modal-actions">
              <button className="create-button" onClick={handleAddTask}>
                Create
              </button>
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
