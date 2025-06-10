import React, { useState } from 'react';
import styles from './EquipmentList.module.css';

const equipmentData = [
  {
    id: 1,
    name: 'Tractor John Deere 6135B',
    status: 'In Progress',
    issues: 2,
    lastService: '2025-05-20',
    nextService: '2025-07-01',
    location: 'Field 3',
    description: 'Oil change required. Minor hydraulic leak detected.',
  },
  {
    id: 2,
    name: 'Combine Harvester Claas Lexion',
    status: 'To Do',
    issues: 1,
    lastService: '2025-04-10',
    nextService: '2025-06-15',
    location: 'Garage',
    description: 'Scheduled maintenance pending.',
  },
  {
    id: 3,
    name: 'Sprayer Amazone UX',
    status: 'Done',
    issues: 0,
    lastService: '2025-05-01',
    nextService: '2025-08-01',
    location: 'Field 1',
    description: 'All systems operational.',
  },
];

export const EquipmentList = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.equipmentListPage}>
      <h2 className={styles.title}>Equipment List</h2>
      <div className={styles.list}>
        {equipmentData.map(eq => (
          <div
            key={eq.id}
            className={`${styles.equipmentItem} ${selected === eq.id ? styles.selected : ''}`}
            onClick={() => setSelected(eq.id)}
          >
            <span className={styles.equipmentName}>{eq.name}</span>
            <span className={`${styles.status} ${styles[eq.status.replace(' ', '').toLowerCase()]}`}>{eq.status}</span>
          </div>
        ))}
      </div>
      {selected && (
        <EquipmentDetails
          equipment={equipmentData.find(eq => eq.id === selected)}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

const EquipmentDetails = ({ equipment, onClose }) => (
  <div className={styles.detailsCard}>
    <button className={styles.closeBtn} onClick={onClose}>✖</button>
    <h3>{equipment.name}</h3>
    <div className={styles.detailRow}><b>Status:</b> <span className={styles[equipment.status.replace(' ', '').toLowerCase()]}>{equipment.status}</span></div>
    <div className={styles.detailRow}><b>Issues:</b> {equipment.issues}</div>
    <div className={styles.detailRow}><b>Last Service:</b> {equipment.lastService}</div>
    <div className={styles.detailRow}><b>Next Service:</b> {equipment.nextService}</div>
    <div className={styles.detailRow}><b>Location:</b> {equipment.location}</div>
    <div className={styles.detailRow}><b>Description:</b> {equipment.description}</div>
  </div>
);

export default EquipmentList;