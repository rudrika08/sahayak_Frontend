import React from 'react';
import styles from './styles/Acsess.module.scss';

const Access = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <img src="https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/6776602bc658d4406ab50a38_Screenshot%202025-01-02%20151451.png"alt="Government schemes access" />
      </div>
      <h1 className={styles.pageTitle}>Government Scheme Access</h1>
      <div className={styles.info}>
      <div className={styles.box}>
        <h2>Centralized Access to Government Schemes</h2>
        <p>Access information from various government portals like MyScheme.gov.in in one centralized platform</p>
        </div>
        <div className={styles.box}>
        <h2>AI-Driven Personalization</h2>
        <p>Real-time eligibility checks based on demographic, financial, and personal data provided by users</p>
        </div>
        <div className={styles.box}>
        <h2>Document Verification and Automation</h2>
        <p>Automate application forms with pre-filled data to minimize errors and manual effort</p>
        </div>
      </div>
    </div>
  );
};

export default Access;
