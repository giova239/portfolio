import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import the icons you want
import logo from '../../../icons/logo.svg'; // Adjust the path to your logo.svg file

function Footer() {
  return (
    <footer className="bg-dark text-primary d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
          <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> {/* Use your logo here */}
        </a>
        <span className="mb-3 mb-md-0">© 2024 Giovanni Stevanato</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-primary" href="/">
            <FaTwitter size={24} /> {/* Use Twitter icon */}
          </a>
        </li>
        <li className="ms-3">
          <a className="text-primary" href="/">
            <FaInstagram size={24} /> {/* Use Instagram icon */}
          </a>
        </li>
        <li className="ms-3">
          <a className="text-primary" href="/">
            <FaFacebook size={24} /> {/* Use Facebook icon */}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
