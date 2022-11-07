import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimeEpisodesList } from "../../../../components/animesEp/animeEpisodes";
import { CardAnime } from "../../../../components/CardAnime/cardAnime";
import { InfoAndEpisodeContext } from "../../../../contexts/animes/infoAndEpisodeContext";
import { GlobalContext } from "../../../../contexts/globalContext";
import {
  DivAlingTopAnime,
  DivConteinerInfoTopAling,
  DivEpisodio,
  DivInfo,
  DivSynope,
} from "../../styled";

export const InfoAnime = () => {
  const { animeInfo, listEpisodes } = useContext(InfoAndEpisodeContext);
  const { id } = useParams();
  const { topAiring } = useContext(GlobalContext);

  return (
    <>
      <DivConteinerInfoTopAling>
        <DivInfo>
          <div className="divConteinerInfo">
            <img
              src={`https://cdn.appanimeplus.tk/img/${animeInfo[0].category_image}`}
              alt=""
            />

            <div className="info">
              <h2>Titulo: {animeInfo[0].category_name}</h2>
              <h3>
                Titulo Original: <span>{animeInfo[0].category_name}</span>
              </h3>
              <div className="divGeners">
                <h2>
                  Generos: <span>{animeInfo[0].category_genres}</span>
                </h2>
              </div>
              <h2>
                Episódios: <span>{listEpisodes.length}</span>
              </h2>
              <h2>
                Ano: <span>{animeInfo[0].ano}</span>
              </h2>
            </div>
          </div>
        </DivInfo>
        <DivSynope>
          <h2>
            Sinopse: <span>{animeInfo[0].category_description}</span>
          </h2>
        </DivSynope>
        <DivEpisodio>
          <AnimeEpisodesList
            animeImg={animeInfo[0].category_image}
            animeTitle={animeInfo[0].category_name}
            eplist={listEpisodes}
            key="animeEpisodesList"
          />
        </DivEpisodio>
      </DivConteinerInfoTopAling>
      <DivAlingTopAnime>
        <h2>Top Animes</h2>
        <div>
          {topAiring.map((elem) => {
            return (
              id != elem.category_id &&
              id != elem.id && (
                <CardAnime
                  title={
                    elem.title != undefined ? elem.title! : elem.category_name!
                  }
                  image={`https://cdn.appanimeplus.tk/img/${elem.category_image}`}
                  animeId={elem.id != undefined ? elem.id : elem.category_id}
                  episodeId={elem.video_id != undefined ? elem.video_id : ""}
                ></CardAnime>
              )
            );
          })}
        </div>
      </DivAlingTopAnime>
    </>
  );
};
