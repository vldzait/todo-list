import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../actions/actions';
import styles from "./AddTaskForm.module.scss"

const AddTaskForm: React.FC = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const onAddTaskClickHandler = () => {
    let textTrim = text.trim();
    if (textTrim === '') {
        setIsError(true);
        return;
    }
    dispatch(addTask(textTrim));
    setText('');
  };

  const onNewTaskTextKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let textTrim = text.trim();
      if (textTrim === '') {
          setIsError(true);
          return;
      }
      dispatch(addTask(textTrim));
      setText('');
    }
};

  const onNewTaskTextChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setText(e.currentTarget.value);
  };

  return (
    <div className={styles.addForm}>
      <div className={styles.addBlock}>
        <input 
          placeholder="Введите текст задачи"
          type="text" 
          value={text} 
          onChange={onNewTaskTextChangeHandler} 
          onKeyUp={onNewTaskTextKeyUpHandler}
          className={isError ? styles.error : ''}
        />
        <button onClick={onAddTaskClickHandler}>Добавить</button>
      </div>
      {isError &&
        <div className={styles.errorMessage}>
            Поле обязательно для заполнения
        </div>
      }
    </div>
  );
};

export default AddTaskForm;