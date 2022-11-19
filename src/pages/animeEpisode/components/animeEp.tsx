import { useContext, useEffect, useState } from "react";
import { AnimeEpisodesList } from "../../../components/animesEp/animeEpisodes";
import { toast } from "react-toastify";
import { DivConteinerPlayer, DivEpisodio, DivInfo, DivSynope } from "../style";
import { useNavigate, useParams } from "react-router-dom";
import Player from "./player/player";
import { InfoAndEpisodeContext } from "../../../contexts/animes/infoAndEpisodeContext";
import { GlobalContext } from "../../../contexts/globalContext";
import { CardAnime } from "../../../components/CardAnime/cardAnime";
import { DivAlingTopAnime } from "../../animeInfoPage/styled";
import { EpisodeNameValidate } from "../../../config/episodesFunctions";
import { EpisodesResultsInterface } from "../../../interfaces/animes/infoContextInterface";
import ninjaFlixBackground from "../../../assets/ninjaflixBackgorund.png"

export const AnimeEp = () => {
  const {
    episodesResults,
    animeInfo,
    nextEp,
    previosEp,
    episodesListSpecial,
    episodesList,
    search,
    setSearch,
    setType,
    setPreviosEp,
    setNextEp,
  } = useContext(InfoAndEpisodeContext);
  const { topAiring } = useContext(GlobalContext);
  const [episodeTitle, setEpisodeTitle] =
    useState<EpisodesResultsInterface[]>(episodesResults);

  useEffect(() => setEpisodeTitle(EpisodeNameValidate(episodeTitle)), []);

  const [server, setServer] = useState(
    `${episodesResults[0].locationsd.length != 0 ? "2" : "1"}`
  );

  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <DivConteinerPlayer>
        <div className="player">
          <h2>{server == "2" ? "HD" : "SD"}</h2>
          <Player
            url={`${
              server == "1"
                ? episodesResults[0].location
                : episodesResults[0].locationsd
            }`}
            light={ninjaFlixBackground}
            episodeTitle={episodeTitle[0].title}
            animeTitle={animeInfo[0].category_name}
          ></Player>
        </div>
        {episodesResults[0].location.length != 0 ? (
          <button
            onClick={() => {
              setServer("1");
              toast.success("SD", { autoClose: 2500, pauseOnHover: false });
            }}
          >
            SD
          </button>
        ) : (
          <button
            disabled={true}
            style={{ cursor: "initial", backgroundColor: "gray" }}
          >
            SD
          </button>
        )}
        {episodesResults[0].locationsd.length != 0 ? (
          <button
            onClick={() => {
              setServer("2");
              toast.success("HD", { autoClose: 2500, pauseOnHover: false });
            }}
          >
            HD
          </button>
        ) : (
          <button
            disabled={true}
            style={{ cursor: "initial", backgroundColor: "gray" }}
          >
            HD
          </button>
        )}

        {nextEp != null ? (
          <button
            onClick={() => {
              toast.success("Proximo episodio", {
                autoClose: 2500,
                pauseOnHover: false,
              });
              navigate(
                `/anime/episode/${nextEp[0].video_id}/${animeInfo[0].id}`
              );
              setNextEp([]);
            }}
          >
            Proximo episodio
          </button>
        ) : (
          <button
            disabled={true}
            style={{ cursor: "initial", backgroundColor: "gray" }}
          >
            Proximo episodio
          </button>
        )}
        {previosEp != null ? (
          <button
            onClick={() => {
              toast.success("Episodio anterior", {
                autoClose: 2500,
                pauseOnHover: false,
              });
              navigate(
                `/anime/episode/${previosEp[0].video_id}/${animeInfo[0].id}`
              );
              setPreviosEp([]);
            }}
          >
            Episodio anterior
          </button>
        ) : (
          <button
            disabled={true}
            style={{ cursor: "initial", backgroundColor: "gray" }}
          >
            Episodio anterior
          </button>
        )}

        <DivInfo>
          <div className="divConteinerInfo">
            <img
              src={`https://cdn.appanimeplus.tk/img/${animeInfo[0].category_image}`}
              alt=""
            />
            <div className="info">
              <h2>Titulo: {episodesResults[0].title}</h2>
              <div className="divGeners">
                <h2>
                  Generos: <span>{animeInfo[0].category_genres}</span>
                </h2>
              </div>
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
            episodesListSpecial={episodesListSpecial}
            episodesList={episodesList}
            setType={setType}
            search={search}
            setSearch={setSearch}
          />
        </DivEpisodio>
      </DivConteinerPlayer>
      <DivAlingTopAnime>
        <h2>Top Animes</h2>
        <div>
          {topAiring.map((elem, index) => {
            return (
              id != elem.category_id &&
              id != elem.id &&
              index < 7 && (
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
