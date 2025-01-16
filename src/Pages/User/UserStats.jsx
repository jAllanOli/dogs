import React from "react";
import { Loading } from "../../utils/Loading";
import { Error } from "../../utils/Error";
import { Head } from "../../utils/Head";
import { useFetch } from "../../Hooks/useFetch";
import { STATS_GET } from "../../Api";

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};
