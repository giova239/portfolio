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
      <h1 className="text-center">Contact Page</h1>
      <Row className="mt-4">
        <Col lg={6} className="mb-4">
          <Card>
            <Card.Body>
              <ContactForm />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <ContactCard
            icon={FaHome}
            iconColor="primary"
            line1="Residence:"
            line2="Venice, Italy"
          />
          <ContactCard
            icon={FaPhone}
            iconColor="secondary"
            line1="Phone:"
            line2="+1 (234) 567-890"
          />
          <ContactCard
            icon={FaEnvelope}
            iconColor="info"
            line1="Email:"
            line2="stevanay@gmail.com"
          />
          <ContactCard
            icon={FaLinkedin}
            iconColor="accent1"
            line1="LinkedIn:"
            line2="https://www.linkedin.com/in/stevanatogiovanni/"
          />
          <ContactCard
            icon={FaGithub}
            iconColor="accent2"
            line1="GitHub:"
            line2="github.com/yourprofile"
          />
          <ContactCard
            icon={FaInstagram}
            iconColor="accent3"
            line1="Instagram:"
            line2="instagram.com/yourprofile"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
