import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';

const App = () => {
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

  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
