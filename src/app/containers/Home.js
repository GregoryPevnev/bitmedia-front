import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Info from "../components/sections/Info";
import Packages from "../components/sections/Packages";
import ImageBackground from "../components/helpers/ImageBackground";
import Footer from "../layout/Footer";
import footerBackground from "../../assets/home-footer-bg.svg";

const Home = () => (
  <div className="home">
    <header className="home__header">
      <Hero />
    </header>

    <main className="home__content">
      <About />
      <Info />
      <Packages />
    </main>

    <footer className="home__footer">
      <ImageBackground image={footerBackground} bottom>
        <Footer />
      </ImageBackground>
    </footer>
  </div>
);

export default Home;
