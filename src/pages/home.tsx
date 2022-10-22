import { Header } from "../components/header/header";
import React from "react";
import { SubHeader } from "../components/homeAnimes/subHeader/subMenu";
import { DivHomeConteiner } from "./styled";
import { ContextAnimes } from "../contexts/animesContext";
import { AnimesListGeneric } from "../components/homeAnimes/animes/animesLIstGeneric";

export const HomePage = () => {
  return (
    <>
      <Header />
      <DivHomeConteiner>
        <SubHeader />
        <ContextAnimes>
          <AnimesListGeneric type="recent-episodes" key="recent-episodes" />
          <AnimesListGeneric type="top-airing" key="top-airing" />
          <AnimesListGeneric type="popular" key="popular" />
        </ContextAnimes>
      </DivHomeConteiner>
    </>
  );
};
