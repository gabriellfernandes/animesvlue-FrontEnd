import { Header } from "../../components/header/header";
import { SubHeader } from "./components/subHeader/subMenu";
import { DivHomeConteiner } from "./styled";
import { ContextAnimes } from "../../contexts/animesContext";
import { AnimesListGeneric } from "./components/animes/animesLIstGeneric";

export const HomePage = () => {
  return (
    <>
      <ContextAnimes key="ContextAnimes">
        <Header key="header" />
        <DivHomeConteiner key="DivHomeConteiner">
          <SubHeader key="subMenu" />
          <AnimesListGeneric type="recent-episodes" key="recent-episodes" />
          <AnimesListGeneric type="top-airing" key="top-airing" />
          <AnimesListGeneric type="popular" key="popular" />
        </DivHomeConteiner>
      </ContextAnimes>
    </>
  );
};
