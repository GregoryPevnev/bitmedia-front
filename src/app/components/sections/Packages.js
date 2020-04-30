import React from "react";
import Card from "../common/Card";
import Button from "../common/Button";
import basicImage from "../../../assets/basic.svg";
import standardImage from "../../../assets/standard.svg";
import unlimitedImage from "../../../assets/unlimited.svg";

const Packages = () => (
  <section className="about">
    <h3 className="about__title">
      <b>Afforadble Pricing and Packages</b>
      <br />
      choose your best one
    </h3>
    <p className="about__info">
      Monotonectally grow strategic process improvements vis-a-vis integrated resources.
    </p>
    <div className="about__features">
      <div className="about__feature">
        <Card>
          <Card.Title>Basic</Card.Title>
          <Card.Image source={basicImage} />
          <Card.Bold>$29</Card.Bold>
          <Card.List>
            <p>Push Notifications</p>
            <p>Data Transfer</p>
            <p>SQL Database</p>
            <p>Search & SEO Analytics</p>
            <p>24/7 Phone Support</p>
            <p>2 months technical support</p>
            <p>2+ profitable keyword</p>
          </Card.List>
          <Button>Purchase now</Button>
        </Card>
      </div>

      <div className="about__feature">
        <Card>
          <Card.Title>Standard</Card.Title>
          <Card.Image source={standardImage} />
          <Card.Bold>$149</Card.Bold>
          <Card.List>
            <p>Push Notifications</p>
            <p>Data Transfer</p>
            <p>SQL Database</p>
            <p>Search & SEO Analytics</p>
            <p>24/7 Phone Support</p>
            <p>2 months technical support</p>
            <p>2+ profitable keyword</p>
          </Card.List>
          <Button>Purchase now</Button>
        </Card>
      </div>

      <div className="about__feature">
        <Card>
          <Card.Title>Unlimited</Card.Title>
          <Card.Image source={unlimitedImage} />
          <Card.Bold>$39</Card.Bold>
          <Card.List>
            <p>Push Notifications</p>
            <p>Data Transfer</p>
            <p>SQL Database</p>
            <p>Search & SEO Analytics</p>
            <p>24/7 Phone Support</p>
            <p>2 months technical support</p>
            <p>2+ profitable keyword</p>
          </Card.List>
          <Button>Purchase now</Button>
        </Card>
      </div>
    </div>
    <p className="about__info">
      If you need custom services or Need more?
    {/* TODO: Link */}
    </p>
  </section>
);

export default Packages;
