import { useState } from "react";
import cn from "classnames";

import Footer from "../../components/Footer";
import Heading from "../../components/Heading";

import { ReactComponent as IconPen } from "./assets/icon-pen.svg";
import logo from "./assets/logo.png";

import s from "./Login.module.scss";
import LoginForm from "../../components/Form/LoginForm";
import RegisterForm from "../../components/Form/RegisterForm";
import { useAuth } from "../../src/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user !== null) {
      navigate("/");
    }
  }, []);

  // -------------- LOGIN ---------------------//
  const handleLoginSubmit = (values) => {
    console.log(values);
    auth.signIn(values, () => {
      navigate("/");
    });
  };
  // -------------- REGISTER ---------------------//
  const handleRegisterSubmit = (values) => {
    console.log(values);
  };
  // -------------- TOGGLE + CLOSE ---------------------//

  const handleToggleClick = () => {
    setToggle(true);
  };
  const handleClose = () => {
    setToggle(false);
  };

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
          <div className={s.card} />
          <div className={s.card}>
            <Heading className={s.card__title} level={1}>
              Login
            </Heading>
            <LoginForm onSubmit={handleLoginSubmit} toggle={toggle} />
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
            <RegisterForm onSubmit={handleRegisterSubmit} toggle={toggle} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
