import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import cn from "classnames";

import Container from "../Container";
import logoPng from "../../assets/triple.png";

import s from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();

  const [small, setSmall] = useState(false);

  useEffect(() => {
    function detectScrollY() {
      window.scrollY > 60 ? setSmall(true) : setSmall(false);
    }
    window.addEventListener("scroll", detectScrollY);

    return () => window.removeEventListener("scroll", detectScrollY);
  }, []);
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <header className={s.root}>
      <div className={cn(s.header, { [s.small]: small })}>
        <Container className={s.headerWrap}>
          <div className={s.logo} onClick={handleLogoClick}>
            <img src={logoPng} alt="logo" />
          </div>
          <ul className={s.nav}>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/bio">Bio</Link>
            </li>
            <li>
              <Link to="/">Menu 3</Link>
            </li>
            <li>
              <Link to="/">Menu 4</Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
