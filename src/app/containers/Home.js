import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";

const Home = () => (
  <div className="home">
    <header className="home__header">
      <Hero />
    </header>

    <main className="home__content">
      <About />
    </main>

    {/* <footer className="home__footer">
      <ImageBackground image={footerBackground}>
        <Footer />
      </ImageBackground>
    </footer> */}
  </div>
);

export default Home;
