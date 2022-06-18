import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Input from "../Input/Input";

import cn from "classnames";
import s from "./Form.module.scss";

const LoginForm = ({ onSubmit, toggle, className }) => {
  const loginFormInitState = {
    email: "",
    password: "",
  };
  const [loginForm, setLoginForm] = useState(loginFormInitState);

  const handleLoginInputChange = (e) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(loginForm);
    setLoginForm(loginFormInitState);
  };
  // Observe toggle to empty state.
  useEffect(() => {
    if (toggle) {
      setLoginForm(loginFormInitState);
    }
  }, [toggle]);

  return (
    <form onSubmit={handleLoginSubmit} className={cn(s.root, className)}>
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder=" "
        value={loginForm.email}
        onChange={handleLoginInputChange}
        required
      />

      <Input
        type="password"
        label="Password"
        name="password"
        placeholder=" "
        value={loginForm.password}
        onChange={handleLoginInputChange}
      />

      <div className={s.button_container}>
        <Button color="primary" size="large">
          Go
        </Button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  toggle: PropTypes.bool,
};
export default LoginForm;
