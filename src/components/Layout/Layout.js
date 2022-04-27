import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";

import s from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={s.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
