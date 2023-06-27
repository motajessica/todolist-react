import { FormEvent, useState } from "react";
import { PlusIcon } from '@heroicons/react/24/solid';

interface Task {
  name: string;
  checked: boolean;
  id: number;
}

interface CustomFormProps {
  addTask: (task: Task) => void;
}

const CustomForm = ({ addTask }: CustomFormProps) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.currentTarget.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
