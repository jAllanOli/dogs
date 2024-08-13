import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../UserContext";

export const Form = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          id="username"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          id="password"
          {...password}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};
