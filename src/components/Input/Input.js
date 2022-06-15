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
  onChange,
  defaultValue,
  className,
}) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : "");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div className={cn(s.root, className, { [s.dark]: darkMode })}>
      <input
        className={cn({ [s.dark]: darkMode })}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={handleChange}
      />
      <label
        className={cn({ [s.valid]: value.length > 0 }, { [s.dark]: darkMode })}
      >
        {label}
      </label>
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
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
};

export default Input;
