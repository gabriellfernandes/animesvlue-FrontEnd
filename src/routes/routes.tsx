import { Route, Navigate, Routes } from "react-router-dom";
import { GenerContextComponent } from "../contexts/animes/generContext";
import { HomeContextComponent } from "../contexts/animes/homeContext";
import { InfoOrEpisodeContextComponent } from "../contexts/animes/infoContext";
import { AnimeEpisodePage } from "../pages/animeEpisode/animeEpisode";
import { AnimeInfoPage } from "../pages/animeInfoPage/animeInfoPage";
import { GenersSeachPage } from "../pages/genersPage/genersPage";
import { GenerPageMobile } from "../pages/genersPageMobile/genersPageMobile";
import { HomePage } from "../pages/home/home";
import { InputSeachPage } from "../pages/inputSeach/inputSeach";

export const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContextComponent><HomePage /></HomeContextComponent>} />
      <Route path={"/seach/:title"} element={<InputSeachPage />} />
      <Route path="/anime/info/:id" element={<InfoOrEpisodeContextComponent><AnimeInfoPage /></InfoOrEpisodeContextComponent>} />
      <Route path="/anime/episode/:idEp/:id" element={<InfoOrEpisodeContextComponent><AnimeEpisodePage /></InfoOrEpisodeContextComponent>} />
      <Route path="/anime/:gener" element={<GenerContextComponent><GenersSeachPage/></GenerContextComponent>} />
      <Route path="/geners" element={<GenerPageMobile/>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
