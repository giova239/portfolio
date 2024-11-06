import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Logo from "../logo/logo";

function Footer() {
  return (
    <footer className="bg-dark d-flex flex-wrap justify-content-between align-items-center p-4">
      <div className="col-8 d-flex align-items-center">
        <Logo />
        <span className="fs-14 m-3">© 2024 Giovanni Stevanato</span>
      </div>

      <ul className="nav col-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a
            className="text-accent1"
            href="https://www.linkedin.com/in/stevanatogiovanni/"
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-accent2" href="https://github.com/giova239">
            <FaGithub size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-accent3"
            href="https://www.instagram.com/giobba___/"
          >
            <FaInstagram size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
