import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'first thing',
        day: 'Feb 1st at 6:00pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'Feb 2nd at 6=7:00pm',
        reminder: false
    },
    {
        id: 3,
        text: 'Dinner',
        day: 'Feb 3rd at 8:00pm',
        reminder: false
    }
])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
        )
    )
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
        ) : (
          'No Tasks'
        )}
    </div>
  );
}

export default App;
