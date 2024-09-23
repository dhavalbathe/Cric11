import React from 'react';
import styles from './Nav.module.css';
import logo from "../assets/website-logo.png";


export const Nav = ({ ScrollToForm }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#" className={styles.logoContainer}>
          <div><img className={styles.logo} src={logo} /> </div>
          <div className={styles.logoText}>CRIC 11
          </div>
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#" className={styles.navLink}>Home</a></li>
          <li><a href="#" className={styles.navLink}>Services</a></li>
          <li><a href="#" className={styles.navLink}>Tournaments</a></li>
          <li><a href="#" className={styles.navLink}>About Us</a></li>
          <li><a href="#" className={styles.navLink}>Contact</a></li>
        </ul>
        <button onClick={ScrollToForm} className={styles.registerButton}>Register</button>
        <div className={styles.mobileMenu}>
          <button className={styles.menuButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.menuIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
