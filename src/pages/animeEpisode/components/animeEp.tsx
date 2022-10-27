import { useContext, useState } from "react";
import { AnimeContext } from "../../../contexts/animesContext";
import { AnimeEpisodesList } from "../../../components/animesEp/animeEpisodes";
import { toast } from "react-toastify";
import {
  DivAlingTopAnime,
  DivConteinerPlayer,
  DivEpisodio,
  DivInfo,
  DivSynope,
} from "../styled";
import { CardAnime } from "../../../components/CardAnime/cardAnime";
import { useParams } from "react-router-dom";
import { Player } from "./player";

export const AnimeEp = () => {
  const { episodesResults, animeInfo, listEpisodes, topAiring } =
    useContext(AnimeContext);
  const [server, setServer] = useState(
    `${episodesResults.locationsd.length != 0 ? "2" : "1"}`
  );
  const { id } = useParams();
  return (
    <>
      <DivConteinerPlayer>
        <div className="player">
          <h2>{server == "2" ? "HD" : "SD"}</h2>
          <Player
            link={`${
              server == "1"
                ? episodesResults.location
                : episodesResults.locationsd
            }`}
          ></Player>
        </div>
        <button
          onClick={() => {
            if (episodesResults.location.length != 0) {
              setServer("1");
              toast.success("SD");
            } else {
              toast.error("servidor indisponivel");
            }
          }}
        >
          SD
        </button>
        <button
          onClick={() => {
            if (episodesResults.locationsd.length != 0) {
              setServer("2");
              toast.success("HD");
            } else {
              toast.error("servidor indisponivel");
            }
          }}
        >
          HD
        </button>
        <button>Proximo episodio</button>
        <button>Episodio anterior</button>
        <DivInfo>
          <div className="divConteinerInfo">
            <img
              src={`https://cdn.appanimeplus.tk/img/${animeInfo.category_image}`}
              alt=""
            />
            <div className="info">
              <h2>Titulo: {episodesResults.title}</h2>
              <div className="divGeners">
                <h2>
                  Generos: <span>{animeInfo.category_genres}</span>
                </h2>
              </div>
            </div>
          </div>
        </DivInfo>
        <DivSynope>
          <h2>
            Sinopse: <span>{animeInfo.category_description}</span>
          </h2>
        </DivSynope>

        <DivEpisodio>
          <AnimeEpisodesList
            animeImg={animeInfo.category_image}
            animeTitle={animeInfo.category_name}
            eplist={listEpisodes}
          />
        </DivEpisodio>
      </DivConteinerPlayer>
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
