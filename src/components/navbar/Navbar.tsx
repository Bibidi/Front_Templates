'use client'

import Link from "next/link"
import { useState } from "react"
import "./navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Navigation</h1>
      <button className="navbar-toggler" onClick={toggleNavbar}>☰</button>
      <ul className={`navbar-nav navbar-collapse ${isOpen ? "open" : ""}`}>
        <li className="nav-item"><Link href="/" className="nav-item-link">Home</Link></li>
        <li className="nav-item"><Link href="/HTML" className="nav-item-link">HTML</Link></li>
        <li className="nav-item"><Link href="/CSS" className="nav-item-link">CSS</Link></li >
        <li className="nav-item"><Link href="/Menu" className="nav-item-link">Menu</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;