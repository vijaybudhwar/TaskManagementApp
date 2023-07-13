import React from 'react';
import TaskList from '../components/TaskList';

const TaskListPage: React.FC = () => {
  return (
    <div>
      <h1>Task Management</h1>
      <TaskList />
    </div>
  );
};

export default TaskListPage;
