import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import useForm from "../../hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";

export const Form = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser();
    }
  });

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const res = await fetch(url, options);
      const json = await res.json();
      window.localStorage.setItem("token", json.token);
      console.log(json);
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
