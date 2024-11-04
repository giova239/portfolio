import React from "react";

// Spacers values
const spacerValues = [
  { className: "pt-1", multiplier: 0.25, pixels: "4px" },
  { className: "pt-2", multiplier: 0.5, pixels: "8px" },
  { className: "pt-3", multiplier: 0.75, pixels: "12px" },
  { className: "pt-4", multiplier: 1, pixels: "16px" },
  { className: "pt-5", multiplier: 1.5, pixels: "24px" },
  { className: "pt-6", multiplier: 2, pixels: "32px" },
  { className: "pt-7", multiplier: 2.5, pixels: "40px" },
  { className: "pt-8", multiplier: 3, pixels: "48px" },
  { className: "pt-9", multiplier: 3.5, pixels: "56px" },
  { className: "pt-10", multiplier: 4, pixels: "64px" },
  { className: "pt-11", multiplier: 4.5, pixels: "72px" },
  { className: "pt-12", multiplier: 5, pixels: "80px" },
  { className: "pt-13", multiplier: 6, pixels: "96px" },
  { className: "pt-14", multiplier: 7.5, pixels: "120px" },
];

function SpacersSection() {
  return (
    <>
      <h2>Spacers</h2>
      {spacerValues.map(({ className, multiplier, pixels }) => (
        <div className="mb-2 row" key={className}>
          <div className="col d-flex align-items-center">
            <code className="m-0">{`.${className}`}</code>
            <span className="mx-2">→</span>
            <span>${`spacer * ${multiplier}`}</span>
            <span className="mx-2">→</span>
            <span>{pixels}</span>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <span className={`bg-accent2 w-100 ${className}`}></span>
          </div>
        </div>
      ))}
    </>
  );
}

export default SpacersSection;
