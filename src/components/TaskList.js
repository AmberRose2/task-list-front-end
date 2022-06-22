import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isComplete={task.isComplete}
          taskFinished={props.taskFinished}
          deleteTaskCallback={props.deleteTaskCallback}
        />
      );
    });
  };
  return (
    <ul className="tasks__list no-bullet">{getTaskListJSX(props.tasks)}</ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      isComplete: PropTypes.bool,
    })
  ).isRequired,
  taskFinished: PropTypes.func.isRequired,
  deleteTaskCallback: PropTypes.func.isRequired,
};

export default TaskList;
