import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => (
  <div className="page">
    <header className="page__header">
      <Header />
    </header>
    <main className="page__content">
      {children}
    </main>
    <footer className="page__footer">
      <Footer />
    </footer>
  </div>
);

export default Page;
