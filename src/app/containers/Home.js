import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Info from "../components/sections/Info";

const Home = () => (
  <div className="home">
    <header className="home__header">
      <Hero />
    </header>

    <main className="home__content">
      <About />
      <Info />
    </main>

    {/* <footer className="home__footer">
      <ImageBackground image={footerBackground}>
        <Footer />
      </ImageBackground>
    </footer> */}
  </div>
);

export default Home;
