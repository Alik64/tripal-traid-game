import { useRef, useState } from "react";
import cn from "classnames";

import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Form from "../../components/Form";
import Input from "../../components/Input/Input";

import { ReactComponent as IconPen } from "./assets/icon-pen.svg";
import logo from "./assets/logo.png";

import s from "./Login.module.scss";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(false);

  // -------------- LOGIN ---------------------//
  const handleLoginSubmit = (values) => {
    console.log(values);
  };
  // -------------- REGISTER ---------------------//
  const handleRegisterSubmit = (values) => {
    if (values.password !== values.repeatPassword) {
      setError(true);
      return;
    }
    console.log(values.password);
    setError(false);
  };
  // -------------- TOGGLE + CLOSE ---------------------//

  const handleToggleClick = () => {
    setToggle(true);
  };
  const handleClose = () => {
    setToggle(false);
  };

  const loginInput = useRef();

  return (
    <>
      <div className={s.root}>
        <div className={s.logoWrap}>
          <img src={logo} alt="Game logo" />
        </div>
        <div
          className={cn(s.container, {
            [s.active]: toggle,
          })}
        >
          <div className={s.card} ref={loginInput} />
          <div className={s.card}>
            <Heading className={s.card__title} level={1}>
              Login
            </Heading>

            <Form onSubmit={handleLoginSubmit}>
              <Input type="email" label="Email" name="email" />
              <Input type="password" label="Password" name="password" />
              <div className={s.card__button_container}>
                <Button color="primary" size="large">
                  Go
                </Button>
              </div>
            </Form>
          </div>
          <div className={cn(s.card, s.alt)}>
            <div
              onClick={handleToggleClick}
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
            <Form onSubmit={handleRegisterSubmit}>
              <Input darkMode type="email" label="Email" name="email" />
              <Input
                darkMode
                type="password"
                label="Password"
                name="password"
              />
              <Input
                darkMode
                type="password"
                label="Repeat password"
                name="repeatPassword"
              />
              {error && <div className={s.error}>Passwords doesn't match</div>}
              <div className={s.card__button_container}>
                <Button color="primary" size="large">
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
