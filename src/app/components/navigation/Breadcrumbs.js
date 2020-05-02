import React, { Children } from "react";

// TODO: SVG
const Breadcrumbs = ({ children }) => {
  const lastIndex = Children.count(children) - 1;

  return (
    <div className="breadcrumbs">
      {
        Children.map(children, (link, index) => (
          <div className="breadcrumbs__path">
            {link}
            {index !== lastIndex && (
              <span className="breadcrumbs__separator">></span>
            )}
          </div>
        ))
      }
    </div>
  );
};

export default Breadcrumbs;
