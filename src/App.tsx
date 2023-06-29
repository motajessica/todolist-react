import { useState } from 'react';
import reactLogo from './assets/react.svg';

// Custom components
import CustomForm from './components/CustomForm';
import EditForm from './components/EditForm';
import TaskList from './components/TaskList';
import ThemeSwitcher from './components/ThemeSwitcher';
import useLocalStorage from './hooks/useLocalStorage';

interface Task {
  id: number;
  name: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('react-todo.tasks', []);
  const [editedTask, setEditedTask] = useState<Task | null>(null);
  const [previousFocusEl, setPreviousFocusEl] = useState<HTMLElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task: Task) => {
    setTasks((prevState: any) => [...prevState, task]);
  };

  const deleteTask = (id: number) => {
    setTasks((prevState: any[]) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((prevState: any[]) =>
      prevState.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  const updateTask = (task: Task) => {
    setTasks((prevState: any[]) =>
      prevState.map((t) =>
        t.id === task.id ? { ...t, name: task.name } : t
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl?.focus();
  };

  const enterEditMode = (task: Task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement as HTMLElement);
  };

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
      <ThemeSwitcher />
    </div>
  );
}

export default App;
