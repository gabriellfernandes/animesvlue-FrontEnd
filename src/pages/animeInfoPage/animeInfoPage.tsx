import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InfoAnime } from "./components/animesInfo/infoAnime";
import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";
import { DivConteiner, InfoConteiner } from "./styled";

export const AnimeInfoPage = () => {
  const { setAnimeIdInfo, loadingInfo, setLoading, setLoadingInfo } =
    useContext(AnimeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
          {!loadingInfo ? (
            <>
              <InfoAnime key="animesInfo" />
            </>
          ) : (
            <div>Carregando...</div>
          )}
        </InfoConteiner>
      </DivConteiner>
    </>
  );
};
