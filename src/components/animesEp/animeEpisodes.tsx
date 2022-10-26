import { useNavigate } from "react-router-dom";
import { AnimeEpisodesListInterface } from "../../interfaces/animesComponentsInterface/animesCarouselInterface";
import { CardAnimeItem } from "../CardAnime/styled";

export const AnimeEpisodesList = ({
  eplist,
  animeImg,
  animeTitle,
}: AnimeEpisodesListInterface) => {
  const navigate = useNavigate();
  return (
    <div>
      {eplist.length !== undefined &&
        eplist.map((elem) => {
          return (
            <CardAnimeItem className="animeEpConteiner" onClick={() => navigate(`/anime/episode/${elem.video_id}/${elem.category_id}`)}>
              <div className="playButton">
                <img src={`https://cdn.appanimeplus.tk/img/${animeImg}`} alt={animeTitle} />
              </div>
              <h4>{elem.title}</h4>
            </CardAnimeItem>
          );
        })}
    </div>
  );
};
