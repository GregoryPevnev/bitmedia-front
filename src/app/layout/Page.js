import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Page;
