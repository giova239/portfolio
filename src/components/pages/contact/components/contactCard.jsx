import React from "react";
import { Card } from "react-bootstrap";

function ContactCard({
  icon: Icon,
  iconColor = "primary",
  line1,
  line2,
  isLink = false,
}) {
  return (
    <Card className="bg-dark mb-4">
      <Card.Body className="d-flex align-items-center">
        <Icon
          size={50}
          className={`flex-grow text-primary me-5 text-${iconColor}`}
        />
        <div className="d-flex flex-column justify-content-center">
          <p className="fs-18 mb-1">{line1}</p>
          {isLink ? (
            <a
              href={line2}
              className="fs-14 mb-0 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {line2}
            </a>
          ) : (
            <p className="fs-14 mb-0">{line2}</p>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
