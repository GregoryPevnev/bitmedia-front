import React from "react";
import Header from "../../layout/Header";
import Button from "../common/Button";
import ImageBackground from "../helpers/ImageBackground";
import headerBackground from "../../../assets/home-header-bg.svg";
import mobileImage from "../../../assets/mobile.svg";

const Hero = () => (
  <ImageBackground image={headerBackground}>
    <div className="hero">
      <div className="hero__header">
        <Header />
      </div>
      <div className="hero__content">
        <div className="hero__information">
          <h2 className="hero__title"><b>Brainstorming</b> for desired perfect Usability</h2>
          <p className="hero__text">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <Button primary>View Stats</Button>
        </div>
        <img className="hero__image" src={mobileImage} />
      </div>
    </div>
  </ImageBackground>
);

export default Hero;
