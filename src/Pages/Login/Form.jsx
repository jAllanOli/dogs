import React from "react";
import { Link } from "react-router-dom";

export const Form = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const json = await res.json();
    console.log(json);
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          name="password"
          id="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};
