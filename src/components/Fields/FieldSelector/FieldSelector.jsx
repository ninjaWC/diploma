import React from 'react';
import styles from '../FieldAnalytics.module.css';

export const FieldSelector = ({ fields, selectedFieldId, setSelectedFieldId }) => {
  return (
    <div className={styles.selectorBlock}>
      <label htmlFor="field-select" className={styles.selectorLabel}>📍 Select Field:</label>
      <select
        id="field-select"
        className={styles.selector}
        value={selectedFieldId}
        onChange={e => setSelectedFieldId(Number(e.target.value))}
      >
        {fields.map(field => (
          <option key={field.id} value={field.id}>
            {field.name} — {field.crop} ({field.area} ha)
          </option>
        ))}
      </select>
    </div>
  );
};