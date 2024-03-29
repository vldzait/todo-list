import uuid from 'react-uuid';

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

export const addTask = (text: string) => {
  return {
    type: ADD_TASK,
    payload: {
      id: uuid(),
      text,
      isDone: false
    }
  };
};

export const toggleTask = (id: number) => {
  return {
    type: TOGGLE_TASK,
    payload: id
  };
};