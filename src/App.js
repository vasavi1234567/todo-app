


// Importing necessary libraries and components from React and React Router
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList/TaskList'; // Importing the TaskList component
import './App.css'; // Importing CSS file for styling

// Define the main App component
const App = () => {
  // Declare a state variable 'tasks' to store the list of tasks and its setter 'setTasks'
  const [tasks, setTasks] = useState([]);

  // useEffect hook to fetch tasks from a JSON file when the component mounts
  useEffect(() => {
    // Fetch tasks from the tasks.json file sample data file
    fetch('/tasks.json')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => setTasks(data.map(task => ({ ...task, expanded: false })))) // Update tasks state with fetched data
      .catch(error => console.error('Error fetching tasks:', error)); // Log any errors during fetch
  }, []); // Empty dependency array means this effect runs only once

  // Function to add or update a task in the task list
  const addOrUpdateTask = (task) => {
    setTasks(prevTasks => {
      // Find if the task already exists in the list
      const existingTaskIndex = prevTasks.findIndex(t => t.id === task.id);
      if (existingTaskIndex > -1) {
        // Update existing task
        const updatedTasks = [...prevTasks];
        updatedTasks[existingTaskIndex] = task;
        return updatedTasks;
      } else {
        // Add new task
        return [...prevTasks, task];
      }
    });
  };

  // Render or process the component
  return (
    <Router>
      <div className="App">
        <h1>Todo List</h1> {/* Heading of the app */}
        <Routes>
          {/* Define a route for the TaskList component */}
          <Route path="/" element={<TaskList tasks={tasks} onUpdateTask={addOrUpdateTask} />} />
        </Routes>
      </div>
    </Router>
  );
};

// Export the App component as the default export to be accessible for other components by importing.
export default App;
