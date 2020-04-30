import React from "react";
import Card from "../common/Card";
import cleanIcon from "../../../assets/clean-icon.svg";
import secureIcon from "../../../assets/secure-icon.svg";
import retinaIcon from "../../../assets/retina-icon.svg";

const About = () => (
  <section className="about">
    <h3 className="about__title">
      Why <b>small business owners<br /> love</b> AppCo?
        </h3>
    <p className="about__info">
      Our design projects are fresh and simple and will benefit your business<br /> greatly. Learn more about our work!
        </p>
    <div className="about__features">
      <div className="about__feature">
        <Card>
          <Card.Image source={cleanIcon} />
          <Card.Title>Clean Design</Card.Title>
          <Card.Text>Increase sales by showing true dynamics of your website.</Card.Text>
        </Card>
      </div>

      <div className="about__feature">
        <Card>
          <Card.Image source={secureIcon} />
          <Card.Title>Secure Data</Card.Title>
          <Card.Text>Build your online store’s trust using Social Proof & Urgency.</Card.Text>
        </Card>
      </div>

      <div className="about__feature">
        <Card>
          <Card.Image source={retinaIcon} />
          <Card.Title>Retina Ready</Card.Title>
          <Card.Text>Realize importance of social proof in customer’s purchase decision.</Card.Text>
        </Card>
      </div>
    </div>
  </section>
);

export default About;
