import React from 'react';
import styles from '../FieldAnalytics.module.css';

export const FieldKPIs = ({ field }) => {
  if (!field) return null;
  return (
    <div className={styles.kpiGrid}>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>📏</span>
        <div>
          <div className={styles.kpiLabel}>Area</div>
          <div className={styles.kpiValue}>{field.area} ha</div>
        </div>
      </div>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>🌱</span>
        <div>
          <div className={styles.kpiLabel}>Crop</div>
          <div className={styles.kpiValue}>{field.crop}</div>
        </div>
      </div>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>🌾</span>
        <div>
          <div className={styles.kpiLabel}>Growth Stage</div>
          <div className={styles.kpiValue}>{field.growthStage}</div>
        </div>
      </div>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>🗓️</span>
        <div>
          <div className={styles.kpiLabel}>Last Treatment</div>
          <div className={styles.kpiValue}>{field.lastTreatment}</div>
        </div>
      </div>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>💧</span>
        <div>
          <div className={styles.kpiLabel}>Irrigation</div>
          <div className={styles.kpiValue}>{field.irrigation}</div>
        </div>
      </div>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>🧪</span>
        <div>
          <div className={styles.kpiLabel}>Fertilizers</div>
          <div className={styles.kpiValue}>{field.fertilizers}</div>
        </div>
      </div>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>🦟</span>
        <div>
          <div className={styles.kpiLabel}>Pesticides</div>
          <div className={styles.kpiValue}>{field.pesticides}</div>
        </div>
      </div>
      <div className={styles.kpiCard}>
        <span className={styles.kpiIcon}>📈</span>
        <div>
          <div className={styles.kpiLabel}>Yield</div>
          <div className={styles.kpiValue}>{field.yield}</div>
        </div>
      </div>
    </div>
  );
};