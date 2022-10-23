import { useContext } from "react";
import { AnimeEpisodesList } from "../../../../components/animesEp/animeEpisodes";
import { CardAnime } from "../../../../components/CardAnime/cardAnime";
import { AnimeContext } from "../../../../contexts/animesContext";
import { DivAlingTopAnime, DivConteinerInfoTopAling, DivInfo, DivSynope } from "../../styled";

export const InfoAnime = () => {
  const { animeInfo, topAiring } = useContext(AnimeContext);

  return (
    <>
      <DivConteinerInfoTopAling>
        <DivInfo>
          <div className="divConteinerInfo">
            <img src={animeInfo.animeImg} alt="" />

            <div className="info">
              <h2>Title: {animeInfo.animeTitle}</h2>
              <h3>
                Original Title: <span>{animeInfo.otherNames}</span>
              </h3>
              <div className="divGeners">
                <h2>Genre:</h2>
                <ul>
                  {animeInfo.genres.map((elem, index) => {
                  
                    return (  
                      index < 3 &&
                      <li>
                        <span>{elem}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <h2>
                Episodes: <span>{animeInfo.totalEpisodes}</span>
              </h2>
              <h2>
                Status: <span>{animeInfo.status}</span>
              </h2>
            </div>
          </div>
        </DivInfo>
        <DivSynope>
          <h2>Synopsis: <span>{animeInfo.synopsis}</span></h2>
        </DivSynope>
        <AnimeEpisodesList
          animeImg={animeInfo.animeImg}
          animeTitle={animeInfo.animeTitle}
          eplist={animeInfo.episodesList}
          key="animeEpisodesList"
        />
      </DivConteinerInfoTopAling>
      <DivAlingTopAnime>
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
      </DivAlingTopAnime>
    </>
  );
};
