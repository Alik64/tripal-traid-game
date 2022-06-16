import { useEffect } from "react";
import { useState } from "react";
import s from "./Form.module.scss";
import React from "react";
import Input from "../Input/Input";
import Button from "../Button";

const RegisterForm = ({ onSubmit }) => {
  const registerFormInitState = {
    email: "",
    password: "",
    passwordRepeat: "",
  };
  const [registerForm, setRegisterForm] = useState(registerFormInitState);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegisterInputChange = (e) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.passwordRepeat) {
      setError(true);
      return;
    }
    onSubmit && onSubmit(registerForm);
    setRegisterForm(registerFormInitState);
    setError(false);
    setSuccess(true);
  };

  return (
    <form onSubmit={handleRegisterSubmit} className={s.root}>
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder=" "
        value={registerForm.email}
        onChange={handleRegisterInputChange}
        darkMode
      />
      <Input
        type="password"
        label="Password"
        name="password"
        placeholder=" "
        value={registerForm.password}
        onChange={handleRegisterInputChange}
        darkMode
      />
      <Input
        type="password"
        label="Password"
        name="passwordRepeat"
        placeholder=" "
        value={registerForm.passwordRepeat}
        onChange={handleRegisterInputChange}
        darkMode
      />
      {error && <div className={s.error}>"Passwords doesn't match!"</div>}
      {success && <div className={s.success}>"Success !"</div>}
      <div className={s.button_container}>
        <Button color="primary" size="large">
          Go
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
