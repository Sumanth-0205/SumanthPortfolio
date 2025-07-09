import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
 <nav className="navbar">
  <div className="navbar-left">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/projects">Crafted Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>

  <div className="logo">ALAPATI SUMANTH</div>

  <div className="navbar-right">
    <ul>
      <li><Link to="/resume">View Resume</Link></li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;
