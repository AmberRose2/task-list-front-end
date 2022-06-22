import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const newTasks = res.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            description: task.description,
            isComplete: task.isComplete,
            taskFinished: task.taskFinished,
            deleteTaskCallback: task.deleteTaskCallback,
          };
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const flipComplete = (id) => {
    axios
      .patch(`${URL}/${id}/mark_complete`)
      .then(() => {
        const newTasks = [];
        for (const task of tasks) {
          const newTask = { ...task };
          if (newTask.id === id) {
            newTask.isComplete = !newTask.isComplete;
          }
          newTasks.push(newTask);
        }
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newTasks = [];
        for (const task of tasks) {
          if (task.id !== id) {
            newTasks.push(task);
          }
        }
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
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
