import { useContext } from "react";
import { AnimeContext } from "../../../contexts/animesContext";
import Iframe from "react-iframe";
import { AnimeEpisodesList } from "../../../components/animesEp/animeEpisodes";

export const AnimeEp = () => {
  const { episodesResults, animeInfo, setServidorEpisode, listEpisodes } =
    useContext(AnimeContext);

  return (
    <div>
      <div className="info">
        <img src={animeInfo.category_image} alt="" />
        <h2>Titulo: {animeInfo.category_name}</h2>
        <div className="divGeners">
          <h2>
            Genrero: <span>{animeInfo.category_genres}</span>
          </h2>
        </div>
        <h2>
          Episode:
          <span>{episodesResults.category_id}</span>
        </h2>
      </div>

      <AnimeEpisodesList
        animeImg={animeInfo.category_image}
        animeTitle={animeInfo.category_name}
        eplist={listEpisodes}
      />
    </div>
  );
};
