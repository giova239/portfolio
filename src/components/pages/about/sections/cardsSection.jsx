import React from "react";
import { Card } from "react-bootstrap";

const COLORS = [
  "primary",
  "secondary",
  "accent1",
  "accent2",
  "accent3",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

function CardsSection() {
  return (
    <>
      <h3 className="mt-4">Cards</h3>
      {COLORS.map((variant) => (
        <Card key={variant} className="mb-3" bg={variant}>
          <Card.Header>Card Header</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some example text to demonstrate the {variant} card component.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardsSection;
