import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../icons/logo.svg';
import profilepic from '../../../icons/profilepic.png';

function Header() {
  return (
    <header className="bg-primary text-white p-3">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className='d-flex align-items-center'>
            <img src={profilepic} alt="Profile" style={{ width: '70px', height: '70px', borderRadius: '50%', marginLeft: '15px' }}/>
            <Link className="navbar-brand ms-3 me-0" to="/">Stevanato Giovanni</Link>
            <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/uikit">UI KIT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
