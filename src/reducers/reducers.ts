import { ADD_TASK, TOGGLE_TASK, Task } from '../actions/actions';

export interface RootState {
  tasks: Task[];
}

const initialState: RootState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      const newTaks = action.payload;
      const newTasks = [...state.tasks, newTaks];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        tasks: newTasks
      };
    case TOGGLE_TASK:
      const toggledId = action.payload;
      const toggledTasks = state.tasks.map(task =>
        task.id === toggledId ? { ...task, isDone: !task.isDone } : task
      );
      localStorage.setItem('task', JSON.stringify(toggledTasks));
      return {
        tasks: toggledTasks
      };
    default:
      return state;
  }
};

export default rootReducer;