import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Info from "../components/sections/Info";
import Packages from "../components/sections/Packages";
import Form from "../components/form/Form";
import Footer from "../layout/Footer";

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
      <div className="home__subscription">
        <Form />
      </div>
      <Footer />
    </footer>
  </div>
);

export default Home;
