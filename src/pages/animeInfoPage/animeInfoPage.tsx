import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimeEpisodesList } from "../../components/animesEp/animeInfoEpisodes";
import { AnimeInfo } from "../../components/animesInfo/animeinfo";
import { v4 as uuid } from "uuid";
import { CardAnime } from "../../components/CardAnime/cardAnime";
import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";

export const AnimeInfoPage = () => {
  const {
    setAnimeIdInfo,
    loadingInfo,
    topAiring,
    animeInfo,
    setLoading,
    setLoadingInfo,
  } = useContext(AnimeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    id != "" && setAnimeIdInfo(id!);
    if (id == "undefined") {
      setLoading(true);
      setLoadingInfo(true);
      navigate("/");
    }
  }, [id]);

  return (
    <>
      <Header />

      {!loadingInfo ? (
        <>
          <AnimeInfo key={uuid()} />
          <div>
            <h2>Top Animes</h2>
            <div>
              {topAiring.map((elem) => {
                return (
                  <CardAnime
                    image={elem.animeImg}
                    title={elem.animeTitle}
                    animeId={elem.animeId}
                  ></CardAnime>
                );
              })}
            </div>
          </div>
          <AnimeEpisodesList
            animeImg={animeInfo.animeImg}
            animeTitle={animeInfo.animeTitle}
            eplist={animeInfo.episodesList}
            key={uuid()}
          />
        </>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
};
