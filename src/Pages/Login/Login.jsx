import { Route, Routes } from "react-router-dom";
import { Form } from "./Form";
import { CreateAccount } from "./CreateAccount";
import { PasswordLoss } from "./PasswordLoss";
import { PasswordReset } from "./PasswordReset";

export const Login = () => {
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
