import React from 'react';
import TaskForm from '../components/TaskForm';

const TaskFormPage: React.FC = () => {
  return (
    <div>
      <h1>Add Task</h1>
      <TaskForm />
    </div>
  );
};

export default TaskFormPage;
