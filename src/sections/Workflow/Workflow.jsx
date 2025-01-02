import React from 'react';
import styles from './styles/Workflow.module.scss';

const Workflow = () => {
  return (
    <div className={styles.workflowSection}>
      <div className={styles.workflowCard}>
        <h2 className={styles.workflowTitle}>Workflow Steps</h2>
        <div className={styles.workflowSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h2>Create an Account</h2>
              <p>Sign up on the platform with your basic information to access personalized services.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h2>Check Eligibility</h2>
              <p>Provide necessary details for real-time eligibility checks to determine suitable government schemes.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h2>Submit Documents</h2>
              <p>Upload required documents for verification and automated filling of application forms.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h2>Apply for Schemes</h2>
              <p>Submit applications for selected schemes with pre-filled data for a seamless process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
