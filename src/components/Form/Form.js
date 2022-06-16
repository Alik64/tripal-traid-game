import { useEffect } from "react";
import { useState } from "react";
import s from "./Form.module.scss";
import React from "react";

const Form = ({ children, onChange, onSubmit }) => {
  const [values, setValues] = useState("");

  useEffect(() => {
    onChange && onChange(values);
  }, [values]);

  const handleChange = (e) => {
    console.log("e ==>", e);
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(values);
    setValues({});
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className={s.root}>
      {children}
    </form>
  );
};

export default Form;
