import { useState } from "react";
import cn from "classnames";

import Footer from "../../components/Footer";
import Heading from "../../components/Heading";

import { ReactComponent as IconPen } from "./assets/icon-pen.svg";
import logo from "./assets/logo.png";

import s from "./Login.module.scss";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  const loginFormInitState = {
    login_email: "",
    login_password: "",
  };
  const registerFormInitState = {
    register_email: "",
    register_password: "",
    register_repeat: "",
  };

  const [loginForm, setLoginForm] = useState(loginFormInitState);

  const [registerForm, setRegisterForm] = useState(registerFormInitState);

  // -------------- LOGIN ---------------------//

  const handleLoginInputChange = (e) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    setLoginForm(loginFormInitState);
  };

  // -------------- REGISTER ---------------------//

  const handleRegisterInputChange = (e) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerForm.register_password !== registerForm.register_repeat) {
      setError("Password doesn't match");
      return;
    }

    console.log(registerForm);
    setRegisterForm(registerFormInitState);
    setError("");
  };

  // -------------- TOGGLE + CLOSE ---------------------//

  const handleToggle = () => {
    setToggle(true);
    setLoginForm(loginFormInitState);
  };
  const handleClose = () => {
    setToggle(false);
    setRegisterForm(registerFormInitState);
  };
  return (
    <>
      <div className={s.root}>
        <div className={s.logoWrap}>
          <img src={logo} alt="Game logo" />
        </div>
        <div
          className={cn(s.login__container, {
            [s.active]: toggle,
          })}
        >
          <div className={s.card}></div>
          <div className={s.card}>
            <Heading className={s.card__title} level={1}>
              Login
            </Heading>
            <form className={s.card__login_form} onSubmit={handleLoginSubmit}>
              <div className={s.card__input_container}>
                <input
                  type="email"
                  name="login_email"
                  id="login_email"
                  placeholder=" "
                  required
                  value={loginForm.login_email}
                  onChange={handleLoginInputChange}
                />
                <label htmlFor="login-email">Email</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.card__input_container}>
                <input
                  type="password"
                  name="login_password"
                  id="login_password"
                  placeholder=" "
                  value={loginForm.login_password}
                  onChange={handleLoginInputChange}
                  required
                />
                <label htmlFor="password">Password</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.card__button_container}>
                <button>
                  <span>go</span>
                </button>
              </div>
            </form>
          </div>
          <div className={cn(s.card, s.alt)}>
            <div
              onClick={handleToggle}
              className={cn(s.card__toggle, {
                [s.active]: toggle,
              })}
            >
              <IconPen className={s.card__toggle__ico} />
            </div>
            <Heading className={s.card__title} level={1}>
              Register
              <div onClick={handleClose} className={s.close}></div>
            </Heading>
            <form
              className={s.card__register_form}
              onSubmit={handleRegisterSubmit}
            >
              <div className={s.card__input_container}>
                <input
                  type="email"
                  name="register_email"
                  id="register_email"
                  placeholder=" "
                  value={registerForm.register_email}
                  onChange={handleRegisterInputChange}
                  required
                />
                <label htmlFor="register_email">Email</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.card__input_container}>
                <input
                  type="password"
                  name="register_password"
                  id="register_password"
                  placeholder=" "
                  value={registerForm.register_password}
                  onChange={handleRegisterInputChange}
                  required
                />
                <label htmlFor="register_password">Password</label>
                <div className={s.bar}></div>
              </div>
              <div className={s.card__input_container}>
                <input
                  type="password"
                  name="register_repeat"
                  id="register_repeat"
                  placeholder=" "
                  value={registerForm.register_repeat}
                  onChange={handleRegisterInputChange}
                  required
                />
                <label htmlFor="register_password">Repeat password</label>
                <div className={s.bar}></div>
                <div className={s.error}>{error}</div>
              </div>
              <div className={s.card__button_container}>
                <button>
                  <span>register</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
