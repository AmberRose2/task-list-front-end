import React, { useState } from 'react';
import PropTypes from 'prop-types';
const formDefault = {
  title: '',
  description: '',
  isComplete: false,
};

const TasksForm = (props) => {
  const [formData, setFormData] = useState(formDefault);
  const changeFormdata = (event) => {
    const formName = event.target.name;
    const formValue = event.target.value;
    const newFormData = { ...formData };
    newFormData[formName] = formValue;
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTaskCallBack(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={changeFormdata}
      ></input>
      <label htmlFor="descriptiong">Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={changeFormdata}
      ></input>
      <input type="submit" value="Add Task" />
    </form>
  );
};
TasksForm.propTypes = {
  addTaskCallBack: PropTypes.func,
};

export default TasksForm;
