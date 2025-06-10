import React, { useState } from 'react';
import styles from './FieldAnalytics.module.css';
import { FieldSelector } from './FieldSelector/FieldSelector.jsx';
import { FieldKPIs } from './FieldKPI/FieldKPI.jsx';

// Пример данных
const fields = [
  {
    id: 1,
    name: 'Field 1',
    crop: 'Wheat',
    area: 25,
    status: 'Processed',
    growthStage: 'Tillering',
    lastTreatment: '2025-05-20',
    fertilizers: 'NPK, 120kg',
    pesticides: 'Herbicide, 2L',
    irrigation: '2025-05-15, 30mm',
    yield: '4.2 t/ha (2024), 3.9 t/ha (2023)',
  },
  {
    id: 2,
    name: 'Field 2',
    crop: 'Corn',
    area: 18,
    status: 'Unprocessed',
    growthStage: 'Emergence',
    lastTreatment: '2025-05-10',
    fertilizers: 'Urea, 80kg',
    pesticides: 'None',
    irrigation: '2025-05-12, 20mm',
    yield: '7.1 t/ha (2024), 6.8 t/ha (2023)',
  },
];

export const FieldAnalytics = () => {
  const [selectedFieldId, setSelectedFieldId] = useState(fields[0].id);

  const selectedField = fields.find(f => f.id === selectedFieldId);

  return (
    <section className={styles.analyticsPage}>
      <h1 className={styles.title}>Field Analytics</h1>
      <FieldSelector
        fields={fields}
        selectedFieldId={selectedFieldId}
        setSelectedFieldId={setSelectedFieldId}
      />
      <FieldKPIs field={selectedField} />
    </section>
  );
};