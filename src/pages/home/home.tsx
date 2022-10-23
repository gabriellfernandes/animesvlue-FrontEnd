import { Header } from "../../components/header/header";
import { SubHeader } from "../../components/homeAnimes/subHeader/subMenu";
import { DivHomeConteiner } from "./styled";
import { ContextAnimes } from "../../contexts/animesContext";
import { AnimesListGeneric } from "../../components/homeAnimes/animes/animesLIstGeneric";


export const HomePage = () => {
  return (
    <>
      <ContextAnimes>
        <Header key="header"/>
        <DivHomeConteiner>
          <SubHeader key="subMenu"/>
          <AnimesListGeneric type="recent-episodes" key="recent-episodes" />
          <AnimesListGeneric type="top-airing" key="top-airing" />
          <AnimesListGeneric type="popular" key="popular" />
        </DivHomeConteiner>
      </ContextAnimes>
    </>
  );
};
