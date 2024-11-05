import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="custom-logo" to="/">
      <h1 className="custom-logo__letter custom-logo__letter--S">S</h1>
      <h1 className="custom-logo__letter custom-logo__letter--G">G</h1>
    </Link>
  );
}

export default Logo;
