import { types } from 'mobx-state-tree';

const Task = types
  .model('Task', {
    id: types.identifier,
    title: types.string,
    description: types.string,
    status: types.enumeration(['To Do', 'In Progress', 'Completed']),
  })
  .actions((self) => ({
    setTitle(newTitle: string) {
      self.title = newTitle;
    },
    setDescription(newDescription: string) {
      self.description = newDescription;
    },
    setStatus(newStatus: 'To Do' | 'In Progress' | 'Completed') {
      self.status = newStatus;
    },
  }));

export default Task;
