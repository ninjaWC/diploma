import { Routes,Route, Link } from 'react-router';
import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <section className={styles.home}>
      <div className={styles.welcomeBlock}>
        <h1 className={styles.title}>Welcome to AgriControl!</h1>
        <p className={styles.subtitle}>
          Your intelligent assistant for managing agricultural processes.
        </p>
      </div>
      <div className={styles.infoBlock}>
        <h2 className={styles.infoTitle}>App Features:</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🌦️</span>
            <Link to="/statistics">
              <div>
                <h3 className={styles.featureTitle}>Weather & Forecasts</h3>
                <p className={styles.featureDesc}>Monitor weather conditions and get up-to-date forecasts.</p>
              </div>
            </Link>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>📊</span>
            <Link to="/fields">
              <div>
                <h3 className={styles.featureTitle}>Field Analytics</h3>
                <p className={styles.featureDesc}>Analyze the state and statistics of each field.</p>
              </div>
            </Link>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🛠️</span>
            <Link to="/equipment-list">
              <div>
                <h3 className={styles.featureTitle}>Equipment Control</h3>
                <p className={styles.featureDesc}>Track the status and manage your machinery.</p>
              </div>
            </Link>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>✅</span>
            <Link to="/tasks">
              <div>
                <h3 className={styles.featureTitle}>Task Management</h3>
                <p className={styles.featureDesc}>Plan, track, and complete your tasks efficiently.</p>
              </div>
            </Link>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🔔</span>
            <Link to="#">
              <div>
                <h3 className={styles.featureTitle}>Notifications</h3>
                <p className={styles.featureDesc}>Receive recommendations and important alerts.</p>
              </div>
            </Link>
          </div>
        </div>
        <p className={styles.infoText}>
          Start by selecting a section from the menu above.
        </p>
      </div>
    </section>
    );
}