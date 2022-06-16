import { useEffect } from "react";
import { useState } from "react";
import s from "./Form.module.scss";
import React from "react";
import Input from "../Input/Input";
import Button from "../Button";

const LoginForm = ({ onSubmit }) => {
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
  return (
    <form onSubmit={handleLoginSubmit} className={s.root}>
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder=" "
        value={loginForm.email}
        onChange={handleLoginInputChange}
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

export default LoginForm;
