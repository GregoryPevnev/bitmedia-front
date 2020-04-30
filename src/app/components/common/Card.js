import React from "react";

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

const Title = ({ children }) => (
  <h3 className="card__title">{children}</h3>
);

const Image = ({ source }) => (
  <img className="card__image" src={source} />
);

const Text = ({ children }) => (
  <p className="card__text">{children}</p>
);

Card.Title = Title;
Card.Image = Image;
Card.Text = Text;

export default Card;
