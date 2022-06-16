import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ color, size, onClick, children }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button className={cn(s.root, s[color], s[size])} onClick={handleClick}>
      <span>{children}</span>
    </button>
  );
};
Button.defaultProps = {
  color: "default",
  size: "default",
};
Button.propTypes = {
  color: PropTypes.oneOf(["default", "black", "primary"]),
  size: PropTypes.oneOf(["default", "large"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
