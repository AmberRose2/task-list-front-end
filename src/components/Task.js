import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  // const [complete, setComplete] = useState(props.isComplete);
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  const completeTask = () => {
    props.taskFinished(props.id);
  };
  return (
    <li className="tasks__item" key={props.id}>
      {props.id}
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={completeTask}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  taskFinished: PropTypes.func.isRequired,
};

export default Task;
