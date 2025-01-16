import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Error } from "../../utils/Error";
import { useForm } from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOSS } from "../../Api";
import { Head } from "../../utils/Head";

export const PasswordLoss = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOSS({
        login: email.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...email} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};
