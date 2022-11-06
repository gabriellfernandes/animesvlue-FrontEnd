import { Header } from "../../components/header/header";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DivConteinerAnimesInput, DivInputPageConteiner } from "./styled";
import { GenericSeach } from "../../components/genericSeach/genericSeachPage";
import { GenerContext } from "../../contexts/animes/generContext";

export const GenersSeachPage = () => {
  const { loadingGener, animesgeners, setGeners } = useContext(GenerContext);
  const { gener } = useParams();

  useEffect(() => {
    gener != "undefined" && gener != "" && setGeners(gener!);
  }, [gener]);

  return (
    <>
      <Header key="header" />
      <DivInputPageConteiner key="DivInputPageConteiner">
        <DivConteinerAnimesInput key="DivConteinerAnimesInput">
          <GenericSeach
            key={"genericPage"}
            list={animesgeners}
            title={gener!}
            loading={loadingGener}
          />
        </DivConteinerAnimesInput>
      </DivInputPageConteiner>
    </>
  );
};
