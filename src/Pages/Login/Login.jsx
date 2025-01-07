import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import { Form } from "./Form";
import { CreateAccount } from "./CreateAccount";
import { PasswordLoss } from "./PasswordLoss";
import { PasswordReset } from "./PasswordReset";
import { UserContext } from "../../UserContext";
import { NotFound } from "../NotFound";

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="criar" element={<CreateAccount />} />
          <Route path="perdeu" element={<PasswordLoss />} />
          <Route path="resetar" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};
