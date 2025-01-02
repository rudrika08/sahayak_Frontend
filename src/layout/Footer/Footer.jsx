import React from 'react';
import styles from './styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>About Us</h3>
          <p>Sahayak.ai is your go-to platform for accessing personalized government schemes with ease and efficiency. Our AI-driven approach ensures you get the best support tailored to your needs.</p>
        </div>
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <p>Email: support@sahayak.ai</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123, Sahayak Street, Bhubaneswar, Odisha, India</p>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© 2024 Sahayak.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
