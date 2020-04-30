import React from "react";

const currentYear = () => new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <h3 className="footer__title">AppCo</h3>
      <p className="footer__info">All rights reserved by ThemeTags</p>
      <p className="footer__info">Copyrights &copy; {currentYear()}</p>
    </div>
  </div>
);

export default Footer;
