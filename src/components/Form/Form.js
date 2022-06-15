import { useEffect } from "react";
import { useState } from "react";
import s from "./Form.module.scss";

const Form = ({ children, onChange, onSubmit }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    onChange && onChange(values);
  }, [values]);

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(values);
  };
  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className={s.root}>
      {children}
    </form>
  );
};

export default Form;
