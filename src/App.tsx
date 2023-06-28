import { useState } from 'react'
import reactLogo from './assets/react.svg'

//custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'


function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (task: any) => {
    setTasks(prevState => [ ... prevState, task ]);
  }

  const deleteTask = (id: any) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  return (
      <div className='container'>
        <header>
          <h1>My Task List</h1>
        </header>
        <CustomForm addTask={addTask}/>
        {tasks && (
          <TaskList 
            tasks={tasks} 
            deleteTask={deleteTask}
          /> 
        )}
      </div>
  )
}

export default App
