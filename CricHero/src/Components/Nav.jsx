import React from 'react';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <>
    <nav className={`${styles.navbarContainer} bg-gray-900 py-4 px-6`}>

        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center">
            {/* Corrected the use of styles.logoText */}
            <div className={`${styles.logoText} text-4xl`}>CRIC 11</div>
          </a>
          <ul className="hidden md:flex space-x-16 text-white">
            <li><a href="#" className={styles.navLink}>Home</a></li>
            <li><a href="#" className={styles.navLink}>Services</a></li>
            <li><a href="#" className={styles.navLink}>Tournaments</a></li>
            <li><a href="#" className={styles.navLink}>About Us</a></li>
            <li><a href="#" className={styles.navLink}>Contact</a></li>
          </ul>
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
