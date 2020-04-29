import React, { Children } from "react";

// TODO: SVG
const Breadcrumbs = ({ children }) => {
  const lastIndex = Children.count(children) - 1;

  return Children.map(children, (link, index) => (
    index === lastIndex ? link : (
      <div>
        {link}
        <span>></span>
      </div>
    )
  ));
};

export default Breadcrumbs;
