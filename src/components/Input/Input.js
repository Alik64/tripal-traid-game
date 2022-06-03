import PropTypes from "prop-types";

import s from "./Input.module.scss";
import cn from "classnames";

const Input = ({
  label,
  type,
  value,
  name,
  id,
  placeholder,
  required,
  onChange,
  className,
}) => {
  const handleChange = (e) => {
    onChange && onChange(e);
  };

  return (
    <div className={cn(s.root, s[className])}>
      <input
        className={cn(s[className])}
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        id={id}
        required={required}
        placeholder={placeholder}
      />
      {label ? <label htmlFor={id}>{label}</label> : null}
      <div className={s.bar}></div>
    </div>
  );
};

Input.defaultProps = {
  placeholder: " ",
  required: true,
};
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
