import React from "react";

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const inputTypes = {
    email: {
      regex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Preencha um email válido",
    },
    password: {
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message:
        "A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 dígito, com no mínimo 8 caracteres",
    },
    number: {
      regex: /^\d+$/,
      message: "Utilize apenas números",
    },
  };

  const validade = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (inputTypes[type] && !inputTypes[type].regex.test(value)) {
      setError(inputTypes[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validade(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    validade: () => validade(value),
    onBlur: () => validade(value),
    error,
  };
};

export default useForm;
