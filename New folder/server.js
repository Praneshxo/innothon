// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to the JSON file
const tasksFilePath = path.join(__dirname, 'src', 'tasks.json');

// Helper function to read tasks from the JSON file
const readTasksFromFile = () => {
  if (fs.existsSync(tasksFilePath)) {
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
  }
  return [];
};

// Helper function to write tasks to the JSON file
const writeTasksToFile = (tasks) => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

// Get all tasks
app.get('/api/tasks', (req, res) => {
  const tasks = readTasksFromFile();
  res.json(tasks);
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const tasks = readTasksFromFile(); // Get existing tasks
  const newTask = req.body; // The new task from request
  newTask.id = Math.random(); // Generate a random ID for the new task
  tasks.push(newTask); // Add new task to the task list
  writeTasksToFile(tasks); // Save updated task list
  res.status(201).json(newTask); // Respond with the new task
});

// Delete a task by ID
app.delete('/api/tasks/:id', (req, res) => {
  const tasks = readTasksFromFile(); // Get existing tasks
  const taskId = parseFloat(req.params.id); // Parse the task ID from the URL
  const updatedTasks = tasks.filter(task => task.id !== taskId); // Filter out the task to be deleted
  writeTasksToFile(updatedTasks); // Save the updated task list
  res.status(200).send(); // Respond with success
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
