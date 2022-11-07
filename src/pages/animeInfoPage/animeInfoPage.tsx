import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InfoAnime } from "./components/animesInfo/infoAnime";
import { Header } from "../../components/header/header";
import { InfoConteiner, DivConteiner } from "./styled";
import { DivLoading } from "../../components/divLoading/divLoading";
import { InfoAndEpisodeContext } from "../../contexts/animes/infoAndEpisodeContext";
import { GlobalContext } from "../../contexts/globalContext";

export const AnimeInfoPage = () => {
  const { loadingInfo, loadingInfoEp, setLoadingInfo } = useContext(
    InfoAndEpisodeContext
  );
  const { setAnimeIdInfo } = useContext(GlobalContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingInfo(true);

    id != "" && setAnimeIdInfo(id!);
    if (id == "undefined") {
      setLoadingInfo(true);
      navigate("/");
    }
  }, [id]);

  return (
    <>
      <Header />
      <DivConteiner>
        <InfoConteiner>
          {!loadingInfoEp && !loadingInfo ? (
            <>
              <InfoAnime key="animesInfo" />
            </>
          ) : (
            <DivLoading />
          )}
        </InfoConteiner>
      </DivConteiner>
    </>
  );
};
