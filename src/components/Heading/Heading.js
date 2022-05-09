import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Heading.module.scss";

export default function Heading({
  level = 1,
  className,
  children,
  backLine,
  id,
}) {
  const el = `h${level}`;

  return React.createElement(
    el,
    {
      id,
      className: cn(s.root, className, s[`level${level}`], {
        [s.backline]: backLine,
      }),
    },
    children
  );
}
Heading.defaultProps = {
  level: 1,
  backLine: false,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node, // number, string, {}, [], etc. tout ce que peut être rendu
  backLine: PropTypes.bool,
  id: PropTypes.string,
};
