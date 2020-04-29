import React from "react";

const Page = ({ children, isActive, onClick }) => (
  <button onClick={() => onClick && onClick()}>
    {isActive ? <b>{children}</b> : children}
  </button>
);

export default Page;
