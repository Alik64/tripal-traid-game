import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import s from "./Layout.module.scss";
import Container from "../Container";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
