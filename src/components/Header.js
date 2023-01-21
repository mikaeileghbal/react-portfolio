import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">about</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/contact">contact</Link>
      <Link to="/resume">resume</Link>
    </div>
  );
}
