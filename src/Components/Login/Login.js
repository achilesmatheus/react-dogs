import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import PasswordLost from "./PasswordLost";
import PasswordReset from "./PasswordReset";
import LoginForm from "./LoginForm";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="perdeu" element={<PasswordLost />} />
          <Route path="resetar" element={<PasswordReset />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
