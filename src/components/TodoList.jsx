// src/components/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css'; // Импорт CSS-модуля

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // Инициализация пустого списка
  const [inputValue, setInputValue] = useState(''); // Для отслеживания введенного текста

  // Функция добавления нового дела
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]); // Добавляем новый элемент в список
      setInputValue(''); // Очищаем поле ввода
    }
  };

  // Функция удаления дела
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Удаляем выбранный элемент по индексу
  };

  return (
    <div className={styles.todoList}>
      <h2 className={styles.title}>Список дел</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите новое дело"
          className={styles.input}
        />
        <button onClick={addTask} className={styles.addButton}>Добавить</button>
      </div>
      <ul className={styles.list}>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
