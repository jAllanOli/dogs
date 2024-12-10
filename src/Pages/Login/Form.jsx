import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "../../UserContext";
import styles from "./Form.module.css";
import btnStyles from "../../Components/Button.module.css";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Error } from "../../utils/Error";

export const Form = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
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
        <Button disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        <Error error={error} />
        {error && <p>{error}</p>}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueceu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={btnStyles.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
