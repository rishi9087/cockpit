import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 

function Header() {
  return (
    <header className="py-3 bg-white border-bottom">
      <div className="container d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <img src="images/logo.png" alt="Plane" style={{ height: '60px' }} />
        </div>

        <nav className="d-flex gap-4">
          <Link to="/" className="nav-link py-2">Home</Link>
          <Link to="/training" className="nav-link py-2">Training</Link>
          <Link to="/test" className="nav-link py-2">Test</Link>
          <Link to="/syllabus" className="nav-link py-2">Syllabus</Link>
        </nav>

        <Link to="/boarding-pass" className="btn btn-outline-warning px-4 py-2">Get Boarding Pass</Link>
      </div>
    </header>
  );
}

export default Header;
