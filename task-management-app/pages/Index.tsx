import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TaskListPage from './TaskListPage';
import TaskFormPage from './TaskFormPage';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/tasks">Task List</Link>
          </li>
          <li>
            <Link to="/tasks/add">Add Task</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tasks" exact component={TaskListPage} />
        <Route path="/tasks/add" component={TaskFormPage} />
      </Switch>
    </Router>
  );
};

export default App;
