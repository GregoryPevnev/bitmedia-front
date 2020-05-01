import React from "react";
import Button from "../common/Button";

const Form = () => (
  <form className="form" noValidate>
    <input className="form__input" type="email" placeholder="Enter your email" />
    <Button>Subscribe</Button>
  </form>
);

export default Form;
