
# Todo List Application

## Overview

This is a frontend Todo List application built with React. It allows users to manage their tasks by adding, editing, marking as done and strike through the completed task, and searching for tasks. The application uses a dummy JSON file as a data repository to store and retrieve task data.

## Features

- **Create Task**: Add new tasks to the list.
- **Update Task**: Edit existing tasks to update their details.
- **Mark as Done**: Mark tasks as completed, which visually distinguishes them from incomplete tasks.
- **Search Tasks**: Filter tasks based on a search input to find specific tasks quickly.
- **Expandable List**: Display tasks in an expandable format, showing additional details like description and timestamp when expanded.

## Explanation

### Project Components

1. **App Component (`App.js`):**
   - The root or starting component of the application.
   - Manages the overall state and includes the `TaskList` component to render tasks.
   - Handles fetching initial task data from the `tasks.json` file and passing it to the `TaskList` component.

2. **TaskList Component (`TaskList.js`):**
   - Responsible for displaying the list of tasks.
   - Implements search functionality to filter tasks based on the users input.
   - Contains the `TaskForm` component for adding or editing tasks.

3. **TaskForm Component (`TaskForm.js`):**
   - Provides a form interface for creating new tasks or updating existing ones.
   - Manages form state and handles form submission to add or edit tasks.

4. **Task Component (`Task.js`):**
   - Represents an individual task item.
   - Includes options to edit, mark as done, and expand the task to view additional details.

### How It Works

1. **Task Management:**
   - Users can create a new task by filling out the form in the `TaskForm` component and submitting it.
   - Existing tasks can be edited by clicking on the edit button associated with each task.
   - Tasks can be marked as done by clicking the "Mark as Done" button, which updates the tasks visual appearance to indicate completion.

2. **Search Functionality:**
   - The search input field in the `TaskList` component allows users to filter tasks dynamically.
   - As users type in the search box, tasks that match the search criteria are displayed, and non-matching tasks are hidden.

3. **Expandable List:**
   - Each task can be expanded to show additional details such as a description and the last update timestamp.
   - This feature enhances the user experience by providing more context about each task.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/vasavi1234567/todo-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

 
 ## Implementation

- **React**: Used for building the frontend components.
- **CSS**: Used for styling the components.




 
