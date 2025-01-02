import React from 'react';
import styles from './styles/SectorCard.module.scss';

const SectorCard = ({ icon, title, count }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <p className={styles.count}>{count} Schemes</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default SectorCard;
