import { useContext } from "react";
import { AnimeContext } from "../../contexts/animesContext";

export const AnimeInfo = () => {
  const { animeInfo } = useContext(AnimeContext);

  return (
    <>
      <div>
        <img src={animeInfo.animeImg} alt="" />
        <h2>{animeInfo.animeTitle}</h2>
        <h3>
          Original Title: <span>{animeInfo.otherNames}</span>
        </h3>
        <h2>Genre</h2>
        <ul>
          {animeInfo.genres.map((elem) => {
            return (
              <li>
                <span>{elem}</span>
              </li>
            );
          })}
        </ul>
        <h2>
          Episodes: <span>{animeInfo.totalEpisodes}</span>
        </h2>
        <h2>
          Status: <span>{animeInfo.status}</span>
        </h2>
      </div>
      <div>
        <h3>Synopsis</h3>
        <p>{animeInfo.synopsis}</p>
      </div>
    </>
  );
};
