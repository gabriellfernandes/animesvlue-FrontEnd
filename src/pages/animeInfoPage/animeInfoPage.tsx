import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InfoAnime } from "./components/animesInfo/infoAnime";
import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";
import { InfoConteiner, DivConteiner } from "./styled";

export const AnimeInfoPage = () => {
  const { setAnimeIdInfo, loadingInfo, setLoading, setLoadingInfo } =
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
          {!loadingInfo ? (
            <>
              <InfoAnime key="animesInfo" />
            </>
          ) : (
            <div  className="divLoading">
               <img src="https://pa1.narvii.com/6618/579af2d8df43ca612e38b09a103bcde82b7d92aa_hq.gif" alt="loading" width="580px" style={{display:"flex", alignItems:"center", justifyContent:"center", justifyItems: "center"}}/>
            </div>
            
          )}
        </InfoConteiner>
      </DivConteiner>
    </>
  );
};
