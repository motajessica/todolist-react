import TaskItem from './TaskItem';
//styles 
import styles from './TaskList.module.css';

interface Task {
  id: number;
  name: string;
  checked: boolean;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  enterEditMode: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      ))}
    </ul>
  )
}

export default TaskList;
