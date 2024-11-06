import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import ContactForm from "./components/contactForm";

function Contact() {
  return (
    <div className="contact-page pt-14">
      <h1>Contact</h1>
      <Row className="mt-4">
        <Col lg={6} className="mb-4">
          <Card className="contact-card">
            <Card.Body>
              <ContactForm />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="contact-card">
            <Card.Body>
              <h5>Contact Information</h5>
              <ul className="list-unstyled contact-info">
                <li>
                  <strong>Residence:</strong> Your City, Country
                </li>
                <li>
                  <strong>Phone:</strong> +1 (234) 567-890
                </li>
                <li>
                  <strong>Email:</strong> example@example.com
                </li>
                <li>
                  <strong>LinkedIn:</strong> linkedin.com/in/yourprofile
                </li>
                <li>
                  <strong>GitHub:</strong> github.com/yourprofile
                </li>
                <li>
                  <strong>Instagram:</strong> instagram.com/yourprofile
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
