import { Header } from "../../components/header/header";
import { SubHeader } from "./components/subHeader/subMenu";
import { DivHomeConteiner } from "./styled";
import { AnimesListGeneric } from "./components/animes/animesLIstGeneric";
import { useContext, useEffect, useState } from "react";
import { DivLoading } from "../../components/divLoading/divLoading";
import { DivConteinerAnimes } from "./components/animes/styled";
import { HomeContext } from "../../contexts/animes/homeContext";

export const HomePage = () => {
  const { loading } = useContext(HomeContext);
 
  const [visible, setVisible] = useState("none");

  useEffect(() => {
    !loading ? setVisible("flex") : setVisible("none");
  }, [loading]);

  return (
    <>
      <div key="ContextAnimes">
        <Header key="header" />
        {loading ? (
          <DivHomeConteiner>
            <SubHeader key="subMenu" />
            <DivConteinerAnimes>
              <DivLoading />
            </DivConteinerAnimes>
            <div style={{display: `${visible}`}}>
              <AnimesListGeneric type="recent-episodes" />
              <AnimesListGeneric type="top-airing" />
              <AnimesListGeneric type="dub" />
            </div>
          </DivHomeConteiner>
        ) : (
          <DivHomeConteiner key="DivHomeConteiner">
            <SubHeader key="subMenu" />
            <AnimesListGeneric type="recent-episodes" />
            <AnimesListGeneric type="top-airing" />
            <AnimesListGeneric type="dub" />
          </DivHomeConteiner>
        )}
      </div>
    </>
  );
};
