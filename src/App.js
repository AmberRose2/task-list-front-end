import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);
  const flipComplete = (id) => {
    for (const task of tasks) {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
    }
    const newTasks = [...tasks];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={tasks}
              taskFinished={flipComplete}
              deleteTaskCallback={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
