'use client'

import Link from "next/link"
import { useState } from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>Navigation</h1>
      <button className={styles.navbarToggler} onClick={toggleNavbar}>☰</button>
      <ul className={`${styles.navbarNav} ${styles.navbarCollapse} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navItemLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/HTML" className={styles.navItemLink}>HTML</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/CSS" className={styles.navItemLink}>CSS</Link>
        </li >
        <li className={styles.navItem}>
          <Link href="/Menu" className={styles.navItemLink}>Menu</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;