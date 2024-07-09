import Link from "next/link"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title"><Link href="/" className="navbar-title-link">Logo</Link></h1>
      <ul className="navbar-nav">
        <li className="nav-item"><Link href="/" className="nav-item-link">Home</Link></li>
        <li className="nav-item"><Link href="/HTML" className="nav-item-link">HTML</Link></li>
        <li className="nav-item"><Link href="/CSS" className="nav-item-link">CSS</Link></li >
        <li className="nav-item"><Link href="/Menu" className="nav-item-link">Menu</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;