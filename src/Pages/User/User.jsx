import { Route, Routes } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { Feed } from "../../Components/Feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStats } from "./UserStats";

export const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};
