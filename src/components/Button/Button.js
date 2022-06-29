import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ color, size, onClick, children, disabled }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button
      disabled={disabled}
      className={cn(s.root, s[color], s[size])}
      onClick={handleClick}
    >
      <span>{children}</span>
    </button>
  );
};
Button.defaultProps = {
  color: "default",
  size: "default",
  disabled: false,
};
Button.propTypes = {
  color: PropTypes.oneOf(["default", "black", "primary"]),
  size: PropTypes.oneOf(["default", "large"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
export default Button;
