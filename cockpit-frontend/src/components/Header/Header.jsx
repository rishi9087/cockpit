import React from 'react';
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
          <a href="#" className="nav-link active-link px-4 py-2 rounded">Home</a>
          <a href="#" className="nav-link py-2">Training</a>
          <a href="#" className="nav-link py-2">Test</a>
          <a href="#" className="nav-link py-2">Syllabus</a>
        </nav>

        <a href="#" className="btn btn-outline-warning px-4 py-2">Get Boarding Pass</a>
      </div>
    </header>
  );
}

export default Header;
