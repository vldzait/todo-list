import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTaskForm from './AddTaskForm';
import { Provider } from "react-redux";
import store from "../../../store/Store";
import { TodoList } from '../todolist/Todolist';

test('add new task', () => {
  render(
    <Provider store={store}>
      <AddTaskForm />
      <TodoList />
    </Provider>
  )
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  const newTodo = screen.getByText('New Task');
  expect(newTodo).toBeInTheDocument();
});

test('add new task with empty text', () => {
  render(
    <Provider store={store}>
      <AddTaskForm />
      <TodoList />
    </Provider>
  )
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(button);

  const newTodo = screen.getByText('Поле обязательно для заполнения');
  expect(newTodo).toBeInTheDocument();
});