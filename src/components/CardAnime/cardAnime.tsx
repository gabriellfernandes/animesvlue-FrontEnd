import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/globalContext";
import { CardAnimeInterface } from "../../interfaces/cardAnimeInterface/cardAnimeInterface";
import { CardAnimeItem } from "./styled";

export const CardAnime = ({
  title,
  image,
  animeId = "",
  episodeId = "",
}: CardAnimeInterface) => {
  const { setAnimeIdInfo, setEpisodeId } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState("visible");

  return (
    <>
      {
        <CardAnimeItem
          onClick={() => {
            setAnimeIdInfo(animeId);
            setEpisodeId(episodeId);
            episodeId == ""
              ? navigate(`/anime/info/${animeId}`)
              : navigate(`/anime/episode/${episodeId}/${animeId}`);
          }}
          style={{ display: `${visible}` }}
        >
          <div className="playButton">
            <img src={image} alt={title} onError={() => setVisible("none")} />
          </div>
          <p>{title}</p>
        </CardAnimeItem>
      }
    </>
  );
};
