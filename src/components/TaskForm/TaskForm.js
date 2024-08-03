
// Importing necessary libraries and components from React
import React, { useState, useEffect } from 'react';
import './TaskForm.css'; // Importing CSS file for styling

// Define the TaskForm component
const TaskForm = ({ task, onSave }) => {
  // Declare state variables for the task title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // useEffect hook to set the title and description when the task property changes
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]); // Only re-run the effect if task changes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newTask = {
      id: task ? task.id : Date.now(), // Using the current time as ID for new tasks
      title,
      description,
      timestamp: new Date().toISOString(), // Add a timestamp
      completed: task ? task.completed : false, // Set completed status
      expanded: task ? task.expanded : false // Set expanded status
    };
    onSave(newTask); // Call onSave property with the new task
    setTitle(''); // Clear the title input
    setDescription(''); // Clear the description input
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task title" // Placeholder text for the title input
        value={title} // Bind the title state variable to the input value
        onChange={(e) => setTitle(e.target.value)} // Update title state on input change
        required // Make the input field required
      />
      <textarea
        placeholder="Task description" // Placeholder text for the description textarea
        value={description} // Bind the description state variable to the textarea value
        onChange={(e) => setDescription(e.target.value)} // Update description state on textarea change
      />
      <button type="submit">{task ? 'Update Task' : 'Add Task'}</button> {/* Button text changes based on task property */}
    </form>
  );
};

 
export default TaskForm;
