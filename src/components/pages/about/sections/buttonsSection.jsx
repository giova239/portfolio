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

      {/* Basic buttons */}
      <div className="mb-4">
        <h5>Basic Buttons</h5>
        {COLORS.map((variant) => (
          <Button key={variant} variant={variant} className="me-2 mb-2">
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
          </Button>
        ))}
      </div>

      {/* Outline buttons */}
      <div className="mb-4">
        <h5>Outline Buttons</h5>
        {COLORS.map((variant) => (
          <Button
            key={`outline-${variant}`}
            variant={`outline-${variant}`}
            className="me-2 mb-2"
          >
            Outline {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>

      {/* Large buttons */}
      <div className="mb-4">
        <h5>Large Buttons</h5>
        {COLORS.map((variant) => (
          <Button
            key={`lg-${variant}`}
            variant={variant}
            size="lg"
            className="me-2 mb-2"
          >
            Large {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>

      {/* Small buttons */}
      <div className="mb-4">
        <h5>Small Buttons</h5>
        {COLORS.map((variant) => (
          <Button
            key={`sm-${variant}`}
            variant={variant}
            size="sm"
            className="me-2 mb-2"
          >
            Small {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>

      {/* Disabled buttons */}
      <div className="mb-4">
        <h5>Disabled Buttons</h5>
        {COLORS.map((variant) => (
          <Button
            key={`disabled-${variant}`}
            variant={variant}
            disabled
            className="me-2 mb-2"
          >
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Disabled
          </Button>
        ))}
      </div>

      {/* Block buttons */}
      <div className="mb-4">
        <h5>Block Buttons</h5>
        {COLORS.map((variant) => (
          <Button key={variant} variant={variant} className="w-100 mb-2">
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
          </Button>
        ))}
      </div>
    </>
  );
}

export default ButtonsSection;
