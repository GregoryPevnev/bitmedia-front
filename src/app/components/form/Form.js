import React from "react";
import Button from "../common/Button";

const Form = ({ onSubmit }) => (
  <form className="form" noValidate onSubmit={e => {
    e.preventDefault();

    if (onSubmit) onSubmit();
  }}>
    <input className="form__input" type="email" placeholder="Enter your email" />
    <Button>Subscribe</Button>
  </form>
);

export default Form;
