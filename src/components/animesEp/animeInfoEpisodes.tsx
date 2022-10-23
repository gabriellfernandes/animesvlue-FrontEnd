import { AnimeEpisodesListInterface } from "../../interfaces/animesComponentsInterface/animesCarouselInterface";

export const AnimeEpisodesList = ({eplist, animeImg, animeTitle}: AnimeEpisodesListInterface) => {

  return (
    <div>
      {eplist.length !== undefined &&
        eplist.map((elem) => {
          return (
            <div>
              <img src={animeImg} alt={animeTitle} />
              <p>{`Ep ${elem.episodeNum} | ${animeTitle}`}</p>
            </div>
          );
        })}
    </div>
  );
};
