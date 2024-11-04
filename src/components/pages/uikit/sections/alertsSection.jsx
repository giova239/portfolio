import React from "react";
import { Alert } from "react-bootstrap";

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

function AlertsSection() {
  return (
    <>
      <h3 className="mt-4">Alerts</h3>
      {COLORS.map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert
        </Alert>
      ))}
    </>
  );
}

export default AlertsSection;
