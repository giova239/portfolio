import React from "react";
import { Row, Col } from "react-bootstrap";

const BODY_COLORS = ["light", "dark", "text"];
const MAIN_COLORS = ["primary", "secondary"];
const ACCENT_COLORS = ["accent1", "accent2", "accent3"];
const INTERACTIONS_COLORS = ["success", "danger", "warning", "info"];

function ColorsSection() {
  const renderColorBlock = (color) => (
    <div key={color} className="d-flex align-items-center mb-3">
      <div
        className={`bg-${color} d-inline-block me-2 shadow`}
        style={{
          width: "100px",
          height: "100px",
        }}
      ></div>
      <span>→{color.charAt(0).toUpperCase() + color.slice(1)}</span>
    </div>
  );

  return (
    <>
      <h2>Color Palette</h2>

      {/* Body Colors */}
      <h3>Body Colors</h3>
      <Row>
        {BODY_COLORS.map((color) => (
          <Col key={color} className="col-3">
            {renderColorBlock(color)}
          </Col>
        ))}
      </Row>

      {/* Main Colors */}
      <h3>Main Colors</h3>
      <Row>
        {MAIN_COLORS.map((color) => (
          <Col key={color} className="col-3">
            {renderColorBlock(color)}
          </Col>
        ))}
      </Row>

      {/* Accent Colors */}
      <h3>Accent Colors</h3>
      <Row>
        {ACCENT_COLORS.map((color) => (
          <Col key={color} className="col-3">
            {renderColorBlock(color)}
          </Col>
        ))}
      </Row>

      {/* Interaction Colors */}
      <h3>Interaction Colors</h3>
      <Row>
        {INTERACTIONS_COLORS.map((color) => (
          <Col key={color} className="col-3">
            {renderColorBlock(color)}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ColorsSection;
