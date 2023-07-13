import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

const TaskList: React.FC = observer(() => {
  const { taskStore } = useStore();

  return (
    <div>
      <h2>Task List</h2>
      {taskStore.tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => taskStore.deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
});

export default TaskList;
