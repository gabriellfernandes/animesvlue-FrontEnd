import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InfoAnime } from "./components/animesInfo/infoAnime";
import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";
import { InfoConteiner, DivConteiner } from "./styled";
import { DivLoading } from "../../components/divLoading/divLoading";

export const AnimeInfoPage = () => {
  const { setAnimeIdInfo, loadingInfo,loadingInfoEp, setLoading, setLoadingInfo } =
    useContext(AnimeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingInfo(true);

    id != "" && setAnimeIdInfo(id!);
    if (id == "undefined") {
      setLoading(true);
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
            <DivLoading/>
          )}
        </InfoConteiner>
      </DivConteiner>
    </>
  );
};
