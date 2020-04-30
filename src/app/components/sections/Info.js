import React from "react";
import Button from "../common/Button";
import macbookImage from "../../../assets/macbook.png";

const Info = () => (
  <section className="info">
    <div className="info__content">
      <div className="info__text">
        <h3 className="info__title">Start Managing your apps business, more faster</h3>
        <p className="info__text">
          Objectively deliver professional value with diverse web-readiness.
          Collaboratively transition wireless customer service without goal-oriented catalysts for change.
          Collaboratively.
        </p>
        <Button primary>Learn more</Button>
      </div>
      <img src={macbookImage} className="info__image" />
    </div>
  </section>
);

export default Info;
