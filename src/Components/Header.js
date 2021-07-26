import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as DogsLogo } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  const userLogged = (
    <Link className={styles.login} to="/conta">
      {data && data.email}
    </Link>
  );

  const userNotLogged = (
    <Link className={styles.login} to="/login">
      Login - Criar
    </Link>
  );

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          <DogsLogo />
        </Link>
        {data ? userLogged : userNotLogged}
      </nav>
    </header>
  );
};

export default Header;
