import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ done, text, onChange, id, onDelete }) => {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });

  return (
    <li className={listItemClasses}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};
export default Task;

Task.defaultProps = {
  done: false,
  text: '',
};

Task.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
