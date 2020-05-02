import React, { Children } from "react";

const Breadcrumbs = ({ children }) => {
  const lastIndex = Children.count(children) - 1;

  return (
    <div className="breadcrumbs">
      {
        Children.map(children, (link, index) => (
          <div className="breadcrumbs__path">
            {link}
            {index !== lastIndex && (
              <div className="breadcrumbs__separator">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 0.999998" stroke="#CCCCCC" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        ))
      }
    </div>
  );
};

export default Breadcrumbs;
