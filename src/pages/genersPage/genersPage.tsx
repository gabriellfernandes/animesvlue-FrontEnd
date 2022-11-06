import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";
import { useContext, useEffect } from "react";
import { CardAnime } from "../../components/CardAnime/cardAnime";
import { useParams } from "react-router-dom";
import {
  DivAnimeSeach,
  DivConteinerAnimesInput,
  DivInputPageConteiner,
} from "./styled";
import { DivLoading } from "../../components/divLoading/divLoading";

export const GenersSeachPage = () => {
  const { loadingGener, animesgeners, setGeners } = useContext(AnimeContext);
  const { gener } = useParams();

  useEffect(() => {
    gener != "undefined" && gener != "" && setGeners(gener!);
  }, [gener]);

  return (
    <>
      <Header key="header" />
      <DivInputPageConteiner key="DivInputPageConteiner">
        <DivConteinerAnimesInput key="DivConteinerAnimesInput">
          {!loadingGener ? (
            animesgeners.length != 0 ? (
              <>
                <h2 style={{ marginTop: "40px", textTransform: "capitalize" }}>{gener == "acao" ? "Ação" : gener!.replace(/_/gi, " ")}</h2>
                <span>-----</span>
                <DivAnimeSeach key="divAnimeSeach">
                  {animesgeners.map((elem) => {
                    return (
                      <CardAnime
                        image={`https://cdn.appanimeplus.tk/img/${elem.category_image}`}
                        title={elem.category_name!}
                        animeId={elem.id}
                      />
                    );
                  })}
                </DivAnimeSeach>
              </>
            ) : (
              <DivLoading/>
            )
          ) : (
            <DivLoading/>
          )}

          <div></div>
        </DivConteinerAnimesInput>
      </DivInputPageConteiner>
    </>
  );
};
