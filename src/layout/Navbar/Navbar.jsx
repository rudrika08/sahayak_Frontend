import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.scss'; // updated import statement
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>Sahayak_AI</div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isMenuOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/service" className={styles.navLink}>Schemes</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/service" className={styles.navLink}>Services</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/guide" className={styles.navLink}>Guide</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/login" className={styles.navLink}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
