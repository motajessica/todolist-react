import { useState, useEffect } from 'react';

// library imports
import { CheckIcon } from '@heroicons/react/24/solid'

interface EditFormProps {
  editedTask: { name: string };
  updateTask: (task: { name: string }) => void;
  closeEditMode: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState<string>(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeEditMode();
      }
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => { e.target === e.currentTarget && closeEditMode() }}
    >
      <form
        className="todo"
        onSubmit={handleFormSubmit}
      >
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.currentTarget.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label
            htmlFor="editTask"
            className="label"
          >
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
}

export default EditForm;
