import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DivLoading } from "../../components/divLoading/divLoading";
import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";
import { AnimeEp } from "./components/animeEp";
import { DivConteiner, EpConteiner } from "./styled";

export const AnimeEpisodePage = () => {
  const {
    setEpisodeId,
    loadingEp,
    setLoading,
    setLoadingInfo,
    setAnimeIdInfo,
  } = useContext(AnimeContext);

  const { idEp, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (idEp != "") {
      setEpisodeId(idEp!);
      setAnimeIdInfo(id!);
    }

    if (idEp == "undefined") {
      setLoading(true);
      setLoadingInfo(true);
      navigate("/");
    }
  }, [idEp]);

  return (
    <>
      <Header />
      <DivConteiner>
        <EpConteiner>
          {!loadingEp ? (
            <AnimeEp />
          ) : (
            <DivLoading/>
          )}
        </EpConteiner>
      </DivConteiner>
    </>
  );
};
