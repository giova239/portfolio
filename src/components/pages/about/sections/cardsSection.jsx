import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const COLORS = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

function CardSection() {
  return (
    <div className="mt-4">
      <h3>Cards with Color-Specific Headers</h3>
      <Row>
        {COLORS.map((color) => (
          <Col sm={6} md={4} lg={3} className="mb-4" key={color}>
            <Card>
              <Card.Header className={`bg-${color}`}>
                {color.charAt(0).toUpperCase() + color.slice(1)} Header
              </Card.Header>
              <Card.Body className="bg-dark">
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a simple card with a {color} header. The body is in
                  dark mode for consistency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardSection;
