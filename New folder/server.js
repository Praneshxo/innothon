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

// Routes
app.get('/api/tasks', (req, res) => {
  const tasks = readTasksFromFile();
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTasks = req.body;
  writeTasksToFile(newTasks);
  res.status(200).send('Tasks updated successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
