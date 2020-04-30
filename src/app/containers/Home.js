import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../components/common/Button";
import ImageBackground from "../components/helpers/ImageBackground";
import headerBackground from "../../assets/home-header-bg.svg";
import footerBackground from "../../assets/home-footer-bg.svg";
import mobileImage from "../../assets/mobile.svg";

const Home = () => (
  <div className="home">
    <header className="home__header">
      <ImageBackground image={headerBackground}>
        {/* TODO: Separate into a Hero-Component */}
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
    </header>

    <main className="home__content">
      <section>

      </section>
    </main>

    {/* <footer className="home__footer">
      <ImageBackground image={footerBackground}>
        <Footer />
      </ImageBackground>
    </footer> */}
  </div>
);

export default Home;
