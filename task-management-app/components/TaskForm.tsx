import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../store';

const TaskForm: React.FC = () => {
  const { taskStore } = useStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: 'To Do',
    };
    taskStore.addTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
