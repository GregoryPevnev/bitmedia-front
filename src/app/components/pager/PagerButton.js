import React from "react";

const PagerButton = ({ children, isActive, onClick }) => (
  <button disabled={!isActive} onClick={() => onClick && onClick()}>
    {children}
  </button>
);

export default PagerButton;
