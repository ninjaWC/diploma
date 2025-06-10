import React, { useState, useEffect } from 'react';
import styles from './TaskManager.module.css';

export const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (title.trim() === '' || desc.trim() === '') return;
    setTasks([
      ...tasks,
      {
        title,
        desc,
        done: false,
        id: Date.now(),
        createdAt: new Date().toLocaleString(),
        deadline: deadline || null,
      },
    ]);
    setTitle('');
    setDesc('');
    setDeadline('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={styles.taskManager}>
      <h2 className={styles.title}>Task Manager</h2>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title..."
        />
        <input
          className={styles.input}
          type="text"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Task description..."
        />
        <input
          className={styles.dateInput}
          type="date"
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          title="Deadline"
        />
        <button className={styles.addBtn} onClick={addTask}>Add</button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} className={`${styles.taskCard} ${task.done ? styles.done : ''}`}>
            <div className={styles.cardHeader}>
              <span
                onClick={() => toggleTask(task.id)}
                className={styles.taskText}
                title={task.done ? 'Mark as not done' : 'Mark as done'}
              >
                {task.done ? '✅' : '⬜'} <b>{task.title}</b>
              </span>
              <button className={styles.deleteBtn} onClick={() => deleteTask(task.id)}>✖</button>
            </div>
            <div className={styles.cardMeta}>
              <span className={styles.metaItem}>🕒 Created: {task.createdAt}</span>
              {task.deadline && (
                <span className={styles.metaItem}>⏳ Deadline: {new Date(task.deadline).toLocaleDateString()}</span>
              )}
            </div>
            <div className={styles.taskDesc}>
              {task.desc}
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TaskManager;