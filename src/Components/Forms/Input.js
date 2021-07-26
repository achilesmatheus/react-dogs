import React from "react";
import style from "./Input.module.css";

const Input = ({
  value,
  onChange,
  error,
  onBlur,
  name,
  id,
  type,
  ...props
}) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={style.input}
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default Input;
