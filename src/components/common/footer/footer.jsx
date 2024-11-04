import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../../../icons/logo.svg';

function Footer() {
  return (
    <footer className="bg-primary d-flex flex-wrap justify-content-between align-items-center p-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
          <img src={logo} alt="Logo" style={{ width: '70px', height: '70px' }} />
        </a>
        <span className="mb-3 mb-md-0">© 2024 Giovanni Stevanato</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-accent2" href="/">
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-accent2" href="/">
            <FaGithub size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
