import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="top-navigation">

        <div className="logo">
            LOGO
        </div>

        <nav className="top-link">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/reports'>Reports</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;
