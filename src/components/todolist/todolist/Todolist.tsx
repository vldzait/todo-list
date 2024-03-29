import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/reducers';
import { TaskItem } from '../taskItem/TaskItem';
import styles from "./Todolist.module.scss"

export const TodoList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className={styles.todolist}>
      <h2>Список дел</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} id={task.id} text={task.text} isDone={task.isDone} />
        ))}
      </ul>
    </div>
  );
};