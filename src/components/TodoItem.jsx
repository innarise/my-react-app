// src/components/TodoItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css'; // Импорт CSS-модуля

const TodoItem = ({ task, onDelete }) => {
  return (
    <li className={styles.item}>
      <span>{task}</span>
      <button onClick={onDelete} className={styles.deleteButton}>Удалить</button>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
