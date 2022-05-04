import { Outlet, useLocation, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../Header";
import Footer from "../Footer";

import s from "./Layout.module.scss";
import Container from "../Container";

const Layout = () => {
  const { pathname, hash } = useLocation();
  const match = useMatch({ path: "/" });

  function scrollIntoView() {
    const anchorTarget = document.getElementById(hash.replace("#", ""));

    anchorTarget &&
      anchorTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    scrollIntoView();
  }, [hash]);

  return (
    <>
      <Header />
      {match !== null ? (
        <Outlet />
      ) : (
        <div className={s.container}>
          <Container>
            <Outlet />
          </Container>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
