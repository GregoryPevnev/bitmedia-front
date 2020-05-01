import React from "react";
import { Link } from "react-router-dom";

const btnClass = isPrimary => `btn ${isPrimary ? "btn--primary" : ""}`;

const Button = ({ children, primary = false, linkTo = null, onClick }) => (
  linkTo ? (
    <Link className={btnClass(primary)} to={linkTo}>
      {children}
    </Link>
  ) : (
      <button className={btnClass(primary)} onClick={onClick}>
        {children}
      </button>
    )
);

export default Button;
