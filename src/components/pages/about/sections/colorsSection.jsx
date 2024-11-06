import React from "react";

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

function ColorsSection() {
  return (
    <>
      <h2>Colors</h2>
      <div className="d-flex flex-wrap">
        {COLORS.map((color) => (
          <div key={color} className={`bg-${color} text-white p-3 me-2 mb-2`}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorsSection;
