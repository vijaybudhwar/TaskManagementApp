import { types } from 'mobx-state-tree';
import Task from './taskModel';

const TaskStore = types
  .model('TaskStore', {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask(task: typeof Task.Type) {
      self.tasks.push(task);
    },
    editTask(taskId: string, updatedTask: typeof Task.Type) {
      const taskIndex = self.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        self.tasks[taskIndex] = updatedTask;
      }
    },
    deleteTask(taskId: string) {
      const taskIndex = self.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        self.tasks.splice(taskIndex, 1);
      }
    },
  }));

export default TaskStore;
