
import React, { useState } from 'react';
import Task from '../Task/Task'; 
import TaskForm from '../TaskForm/TaskForm';  
import './TaskList.css';  

// Define the TaskList component
const TaskList = ({ tasks, onUpdateTask }) => {
  // Declare state variables for editing a task and search term
  const [editTask, setEditTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Handling toggling the expanded state of a task
  const handleToggle = (id) => {
    const updatedTask = tasks.find(task => task.id === id);
    onUpdateTask({ ...updatedTask, expanded: !updatedTask.expanded });
  };

  // Handling setting a task for editing
  const handleEdit = (id) => {
    const task = tasks.find(task => task.id === id);
    setEditTask(task);
  };

  // Handling marking a task as done or undoing it
  const handleMarkDone = (id) => {
    const updatedTask = tasks.find(task => task.id === id);
    onUpdateTask({ ...updatedTask, completed: !updatedTask.completed });
  };

  // Handling saving a task (either new or edited)
  const handleSave = (task) => {
    onUpdateTask(task);
    setEditTask(null); // Clear the editTask state
  };

  // Handling search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm state
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  return (
    <div>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search tasks" // Placeholder text for search input
        value={searchTerm} // Bind searchTerm state to input value
        onChange={handleSearch} // Update searchTerm state on input change
      />
      <TaskForm task={editTask} onSave={handleSave} /> {/* Render TaskForm for adding/editing tasks */} 
      {filteredTasks.map(task => (
        <Task
          key={task.id} // Unique key for each task
          task={task} // Pass task data to Task component
          onToggle={handleToggle} // Pass handleToggle function to Task component
          onEdit={handleEdit} // Pass handleEdit function to Task component
          onMarkDone={handleMarkDone} // Pass handleMarkDone function to Task component
        />
      ))}
    </div>
  );
};

 
export default TaskList;
