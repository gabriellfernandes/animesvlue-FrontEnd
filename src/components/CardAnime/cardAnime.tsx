import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimeContext } from "../../contexts/animesContext";
import { CardAnimeInterface } from "../../interfaces/cardAnimeInterface/cardAnimeInterface";
import { CardAnimeItem } from "./styled";

export const CardAnime = ({
  title,
  image,
  animeId = "",
  episodeId = ""
}: CardAnimeInterface) => {
  const { setLoading, setAnimeIdInfo, setEpisodeId } = useContext(AnimeContext);
  const { id, idEp } = useParams();
  const navigate = useNavigate();
 

  return (
    <>
      {(
        <CardAnimeItem
          onClick={() => {
            setLoading(true);
            setAnimeIdInfo(animeId)
            setEpisodeId(episodeId)
            episodeId == ""
              ? navigate(`/anime/info/${animeId}`)
              : navigate(`/anime/episode/${episodeId}/${animeId}`);
          }}
        >
          <div className="playButton">
            <img src={image} alt={title} />
          </div>
          <p>{title}</p>
        </CardAnimeItem>
      )}
    </>
  );
};
