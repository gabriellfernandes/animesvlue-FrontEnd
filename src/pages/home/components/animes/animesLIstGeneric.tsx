import { useContext } from "react";
import { HomeContext } from "../../../../contexts/animes/homeContext";
import { GlobalContext } from "../../../../contexts/globalContext";
import { AnimesListGenericInterface } from "../../../../interfaces/animesListGeneric/animesListGenericInteface";
import { AnimesCarousel } from "./animesCarousel";
import { DivConteinerAnimes } from "./styled";


export const AnimesListGeneric = ({ type }: AnimesListGenericInterface) => {
  const { recentEpisodes, dubs, loading } =
    useContext(HomeContext);
    const {topAiring} = useContext(GlobalContext)
    
  return (
    <>
      {
        <DivConteinerAnimes>
          {!loading && type === "recent-episodes" ? (
            <AnimesCarousel
              title="Ultimos Lançados"
              list={recentEpisodes}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
          {!loading && type === "top-airing" ? (
            <AnimesCarousel
              title="Popular"
              list={topAiring}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
          {!loading && type === "dub" ? (
            <AnimesCarousel
              title="Dublados"
              list={dubs}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
        </DivConteinerAnimes>
      }
    </>
  );
};
