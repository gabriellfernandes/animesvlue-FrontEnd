import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimeContext } from "../../contexts/animesContext";
import { CardAnimeInterface } from "../../interfaces/cardAnimeInterface/cardAnimeInterface";
import { CardAnimeItem } from "./styled";

export const CardAnime = ({ title, image, animeId = "" }: CardAnimeInterface) => {
  const { setLoading, setAnimeIdInfo } = useContext(AnimeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      {id != animeId && (
        <CardAnimeItem
          onClick={() => {
            setLoading(true);
            setAnimeIdInfo(animeId!);
            navigate(`/anime/info/${animeId}`);
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
