import React from "react";
import { Card } from "react-bootstrap";

function ContactCard({ icon: Icon, iconColor = "primary", line1, line2 }) {
  return (
    <Card className="bg-dark mb-4">
      <Card.Body className="d-flex align-items-center">
        <Icon size={50} className={`text-primary me-5 text-${iconColor}`} />
        <div className="d-flex flex-column justify-content-center">
          <p className="mb-0">{line1}</p>
          <p className="mb-0">{line2}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
