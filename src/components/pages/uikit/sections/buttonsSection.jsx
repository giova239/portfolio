import React from "react";
import { Button } from "react-bootstrap";

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

function ButtonsSection() {
  return (
    <>
      <h3>Buttons</h3>
      {COLORS.map((variant) => (
        <Button key={variant} variant={variant} className="me-2 mb-2">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
        </Button>
      ))}
    </>
  );
}

export default ButtonsSection;
