import React from "react";

const ImageBackground = ({ image, children }) => (
  <div className="image-background">
    <div className="image-background__background">
      <img className="image-background__image" src={image} />
    </div>
    <div className="image-background__content">
      {children}
    </div>
  </div>
);

export default ImageBackground;
