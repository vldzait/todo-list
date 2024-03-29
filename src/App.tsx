import React from 'react';
import { TodoList } from './components/todolist/todolist/Todolist';
import AddTaskForm from './components/todolist/addTaskForm/AddTaskForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>ToDo List</h1>
      <AddTaskForm />
      <TodoList />
    </div>
  );
};

export default App;