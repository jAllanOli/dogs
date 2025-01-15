import { useParams } from "react-router-dom";
import { Feed } from "../../Components/Feed/Feed";
import { Head } from "../../utils/Head";

export const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};
