import { AnimeEpisodesListInterface } from "../../interfaces/animesComponentsInterface/animesCarouselInterface";
import { CardAnimeItem } from "../CardAnime/styled";

export const AnimeEpisodesList = ({
  eplist,
  animeImg,
  animeTitle,
}: AnimeEpisodesListInterface) => {
  return (
    <div>
      {eplist.length !== undefined &&
        eplist.map((elem) => {
          return (
            <CardAnimeItem className="animeEpConteiner">
              <div className="playButton">
                <img src={animeImg} alt={animeTitle} />
              </div>
              <h4>{`Ep ${elem.episodeNum} | ${animeTitle}`}</h4>
            </CardAnimeItem>
          );
        })}
    </div>
  );
};
