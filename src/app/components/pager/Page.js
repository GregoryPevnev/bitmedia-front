import React from "react";

const Page = ({ children, isActive, onClick }) => (
  <button
    className={`pager__btn ${isActive ? "pager__btn--active" : ""}`}
    onClick={() => onClick && onClick()}
  >
    {isActive ? <b>{children}</b> : children}
  </button>
);

export default Page;
