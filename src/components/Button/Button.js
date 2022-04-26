import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

// const Button = ({ title, light, className, onBtnClick }) => {
//   function clickHandler() {
//     onBtnClick();
//   }

//   return (
//     <button
//       className={cn(s.root, className, { [s.light]: light })}
//       onClick={clickHandler}
//     >
//       {title}
//     </button>
//   );
// };

// Button.defaultProps = {
//   light: false,
// };
// Button.propTypes = {
//   title: PropTypes.string,
//   light: PropTypes.bool,
//   className: PropTypes.string,
//   onBtnClick: PropTypes.func,
// };
// export default Button;

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
