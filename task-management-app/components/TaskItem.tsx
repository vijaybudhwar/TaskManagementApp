import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { Task } from '../store/taskModel';

interface TaskItemProps {
  task: typeof Task.Type;
}

const TaskItem: React.FC<TaskItemProps> = observer(({ task }) => {
  const { taskStore } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTask = { ...task, title: updatedTitle, description: updatedDescription };
    taskStore.editTask(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
  };

  const handleDelete = () => {
    taskStore.deleteTask(task.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
});

export default TaskItem;
