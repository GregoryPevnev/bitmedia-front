import React from "react";

const Button = ({ children, primary = false, onClick }) => (
  <button
    className={`btn ${primary ? "btn--primary" : ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
