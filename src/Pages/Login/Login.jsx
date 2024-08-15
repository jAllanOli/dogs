import { Navigate, Route, Routes } from "react-router-dom";
import { Form } from "./Form";
import { CreateAccount } from "./CreateAccount";
import { PasswordLoss } from "./PasswordLoss";
import { PasswordReset } from "./PasswordReset";
import React from "react";
import { UserContext } from "../../UserContext";

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="criar" element={<CreateAccount />} />
        <Route path="perdeu" element={<PasswordLoss />} />
        <Route path="resetar" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};
