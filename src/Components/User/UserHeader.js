import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const pathNames = {
      "/conta": () => setTitle("Minha conta"),
      "/conta/estatisticas": () => setTitle("Estatísticas"),
      "/conta/postar": () => setTitle("Postar foto"),
    };

    pathNames[location.pathname]();
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
