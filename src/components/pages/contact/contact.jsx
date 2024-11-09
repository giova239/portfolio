import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import ContactForm from "./components/contactForm";
import ContactCard from "./components/contactCard";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page pt-14">
      <h1 className="text-center mb-12">Contact Page</h1>
      <Row className="justify-content-around">
        <Col lg={6} xl={5} xxl={4} className="mb-4">
          <h2 className="mb-6">Contact Form:</h2>
          <ContactForm />
        </Col>

        <Col lg={6} xl={5} xxl={4}>
          <h2 className="mb-6">Contact informations:</h2>
          <ContactCard
            icon={FaHome}
            iconColor="primary"
            line1="Residence"
            line2="Venice, Italy"
          />
          <ContactCard
            icon={FaPhone}
            iconColor="secondary"
            line1="Phone"
            line2="+39 3456129917"
          />
          <ContactCard
            icon={FaEnvelope}
            iconColor="info"
            line1="Email"
            line2="stevanay@gmail.com"
          />
          <ContactCard
            icon={FaLinkedin}
            iconColor="accent1"
            line1="LinkedIn"
            line2="https://www.linkedin.com/in/stevanatogiovanni"
            isLink
          />
          <ContactCard
            icon={FaGithub}
            iconColor="accent2"
            line1="GitHub"
            line2="https://github.com/giova239"
            isLink
          />
          <ContactCard
            icon={FaInstagram}
            iconColor="accent3"
            line1="Instagram"
            line2="https://www.instagram.com/giobba___"
            isLink
          />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
