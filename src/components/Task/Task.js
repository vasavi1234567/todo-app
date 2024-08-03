
 
import React from 'react';
import './Task.css';  

// Define the Task component
const Task = ({ task, onToggle, onEdit, onMarkDone }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}> {/* Apply conditional class based on task completion */}
      <h3 onClick={() => onToggle(task.id)}>{task.title}</h3> {/* Task title with onClick event to toggle expand or collapse */}
      {task.expanded && (
        <div>
          <p>{task.description}</p> {/* Display task description if expanded */}
          <small>{new Date(task.timestamp).toLocaleString()}</small> {/* Display formatted task timestamp */}
          <button onClick={() => onEdit(task.id)}>Edit</button> {/* Edit button with onClick event to edit task */}
          <button onClick={() => onMarkDone(task.id)}>
            {task.completed ? 'Undo' : 'Mark as Done'} {/* Button text changes based on task completion status */}
          </button>
        </div>
      )}
    </div>
  );
};

 
export default Task;
