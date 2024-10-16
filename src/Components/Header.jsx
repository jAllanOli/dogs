import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from "../Assets/dogs.svg?react";
import { UserContext } from "../UserContext";
import { Button } from "./Button";

export const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
            <Button onClick={userLogout}>Sair</Button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
