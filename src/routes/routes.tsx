import { Route, Navigate, Routes } from "react-router-dom";
import { AnimeEpisodePage } from "../pages/animeEpisode/animeEpisode";
import { AnimeInfoPage } from "../pages/animeInfoPage/animeInfoPage";
import { HomePage } from "../pages/home/home";
import { InputSeachPage } from "../pages/inputSeach/inputSeach";

export const RoutesMap = () => {
  return (
    <Routes>
      <Route path={"/seach/:title"} element={<InputSeachPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/anime/info/:id" element={<AnimeInfoPage />} />
      <Route path="/anime/episode/:idEp/:id" element={<AnimeEpisodePage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
