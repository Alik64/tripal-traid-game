import { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import s from "./Input.module.scss";

const Input = ({
  type,
  darkMode,
  required,
  label,
  name,
  className,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e) => {
    onChange && onChange(e);
  };
  return (
    <div className={cn(s.root, className, { [s.dark]: darkMode })}>
      <input
        className={cn({ [s.dark]: darkMode })}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <label className={cn({ [s.dark]: darkMode })}>{label}</label>
      <div className={cn(s.bar, { [s.dark]: darkMode })} />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  required: false,
};
Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "number"]),
  value: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
