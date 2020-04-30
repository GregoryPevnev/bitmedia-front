import React, { Children } from "react";

const Card = ({ children, primary = false }) => (
  <div className={`card ${primary ? "card--primary" : ""}`}>
    {children}
  </div>
);

const Title = ({ children }) => (
  <h3 className="card__title">{children}</h3>
);

const Bold = ({ children }) => (
  <h4 className="card__bold">{children}</h4>
);

const Image = ({ source }) => (
  <img className="card__image" src={source} />
);

const Text = ({ children }) => (
  <p className="card__text">{children}</p>
);

const List = ({ children }) => (
  <ul className="card__list">
    {Children.map(children, item => (
      <li className="card__item">{item}</li>
    ))}
  </ul>
)

Card.Title = Title;
Card.Image = Image;
Card.Text = Text;
Card.List = List;
Card.Bold = Bold;

export default Card;
