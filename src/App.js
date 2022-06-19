import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react/cjs/react.production.min';
import Task from './components/Task.js';

{
  /*const TASKS = [
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
]; */
}

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
  // const flipisComplete = (id) => {
  //   const updateTasks = tasks.map((task) => {
  //     if (task.id === id) {
  //       task.isComplete = !task.isComplete;
  //     }
  //     return task;
  //   });
  //   settasks(updateTasks);
  //};
  // isCompleteCallBack={flipisComplete}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasks} />
        </div>
      </main>
    </div>
  );
};

export default App;
