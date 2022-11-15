import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DivLoading } from "../../components/divLoading/divLoading";
import { Header } from "../../components/header/header";
import { InfoAndEpisodeContext } from "../../contexts/animes/infoAndEpisodeContext";
import { GlobalContext } from "../../contexts/globalContext";
import { AnimeEp } from "./components/animeEp";
import { DivConteiner, EpConteiner } from "./style";

export const AnimeEpisodePage = () => {
  const { loadingEp, setLoadingInfo } = useContext(InfoAndEpisodeContext);
  const { setAnimeIdInfo, setEpisodeId } = useContext(GlobalContext);

  const { idEp, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (idEp != "") {
      setEpisodeId(idEp!);
      setAnimeIdInfo(id!);
    }

    if (idEp == "undefined") {
      setLoadingInfo(true);
      navigate("/");
    }
  }, [idEp]);

  return (
    <>
      <Header />
      <DivConteiner>
        <EpConteiner>{!loadingEp ? <AnimeEp /> : <DivLoading />}</EpConteiner>
      </DivConteiner>
    </>
  );
};
