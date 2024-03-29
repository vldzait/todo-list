import { useDispatch } from 'react-redux';
import { toggleTask } from '../../../actions/actions';
import styles from "./TaskItem.module.scss" 

interface Props {
  id: number;
  text: string;
  isDone: boolean;
}

export const TaskItem: React.FC<Props> = ({ id, text, isDone }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  return (
    <li className={isDone ? styles.isDone : ''}>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      <span>{text}</span>
    </li>
  );
};