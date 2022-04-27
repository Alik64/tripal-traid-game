import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ onClick, children, color }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button className={cn(s.root, s[color])} onClick={handleClick}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  color: "default",
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.oneOf(["default", "black"]),
};
export default Button;
