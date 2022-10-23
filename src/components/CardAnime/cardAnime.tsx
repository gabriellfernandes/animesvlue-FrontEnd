import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnimeContext } from "../../contexts/animesContext";
import { CardAnimeInterface } from "../../interfaces/cardAnimeInterface/cardAnimeInterface";
import { CardAnimeItem } from "./styled";

export const CardAnime = ({ title, image, animeId }: CardAnimeInterface) => {
  const { setLoading, setAnimeIdInfo } = useContext(AnimeContext);
  const navigate = useNavigate();
  return (
    <CardAnimeItem
      onClick={() => {
        setLoading(true);
        setAnimeIdInfo(animeId!)
        navigate(`/anime/info/${animeId}`);
      }}
    >
      <img src={image} alt={title} />
      <p>{title}</p>
    </CardAnimeItem>
  );
};
