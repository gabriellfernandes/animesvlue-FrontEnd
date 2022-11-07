import { Route, Navigate, Routes } from "react-router-dom";
import { GenerContextComponent } from "../contexts/animes/generContext";
import { HomeContextComponent } from "../contexts/animes/homeContext";
import { InfoAndEpisodeContextComponent } from "../contexts/animes/infoAndEpisodeContext";
import { SeachContextComponent } from "../contexts/animes/SeachContext";
import { AnimeEpisodePage } from "../pages/animeEpisode/animeEpisode";
import { AnimeInfoPage } from "../pages/animeInfoPage/animeInfoPage";
import { GenersSeachPage } from "../pages/genersPage/genersPage";
import { GenerPageMobile } from "../pages/genersPageMobile/genersPageMobile";
import { HomePage } from "../pages/home/home";
import { InputSeachPage } from "../pages/inputSeach/inputSeach";

export const RoutesMap = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeContextComponent>
            <HomePage />
          </HomeContextComponent>
        }
      />
      <Route
        path={"/seach/:title"}
        element={
          <SeachContextComponent>
            <InputSeachPage />
          </SeachContextComponent>
        }
      />
      <Route
        path="/anime/info/:id"
        element={
          <InfoAndEpisodeContextComponent>
            <AnimeInfoPage />
          </InfoAndEpisodeContextComponent>
        }
      />
      <Route
        path="/anime/episode/:idEp/:id"
        element={
          <InfoAndEpisodeContextComponent>
            <AnimeEpisodePage />
          </InfoAndEpisodeContextComponent>
        }
      />
      <Route
        path="/anime/:gener"
        element={
          <GenerContextComponent>
            <GenersSeachPage />
          </GenerContextComponent>
        }
      />
      <Route path="/geners" element={<GenerPageMobile />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
