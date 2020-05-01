import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ children, to }) => (
  <Link className="link" to={to}>
    {children}
  </Link>
);

export default CustomLink;
