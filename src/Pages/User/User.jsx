import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { Feed } from "../../Components/Feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";
import { UserContext } from "../../UserContext";
import { Head } from "../../utils/Head";

export const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};
