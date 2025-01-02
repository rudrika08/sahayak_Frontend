import React from 'react';
import styles from './styles/Guide.module.scss';

const GuidePage = () => {
  return (
    <div className={styles.guideContainer}>
      <h1 className={styles.heading}>Welcome to the Shayak Guide</h1>
      <p className={styles.introText}>
        Get started with Shayak and make the most out of its features. This guide will walk you through the key features and tips.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Getting Started</h2>
        <p className={styles.sectionContent}>
          To get started, simply create an account or log in if you already have one. After logging in, you will be able to access all the features on the platform.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Features</h2>
        <ul className={styles.featureList}>
          <li>Profile Customization</li>
          <li>Content Sharing</li>
          <li>Advanced Search Filters</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Troubleshooting</h2>
        <p className={styles.sectionContent}>
          If you encounter any issues, please visit the troubleshooting section or contact support for assistance.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>For more help, visit our <a href="/support" className={styles.link}>Support Page</a>.</p>
      </footer>
    </div>
  );
};

export default GuidePage;
