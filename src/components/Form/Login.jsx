import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext.jsx';
import styles from './Login.module.css';

export const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (username.trim()) {
      login(username.trim());
    }
    alert(`registration succeed!`)
  };

  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button className={styles.btn} type="submit">Continue</button>
      </form>
    </div>
  );
};