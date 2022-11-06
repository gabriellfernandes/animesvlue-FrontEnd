import { useContext } from "react";
import { HomeContext } from "../../../../contexts/animes/homeContext";
import { AnimeContext } from "../../../../contexts/animesContext";
import { AnimesListGenericInterface } from "../../../../interfaces/animesListGeneric/animesListGenericInteface";
import { AnimesCarousel } from "./animesCarousel";
import { DivConteinerAnimes } from "./styled";


export const AnimesListGeneric = ({ type }: AnimesListGenericInterface) => {
  const { recentEpisodes, topAiring, dubs, loading } =
    useContext(HomeContext);
    
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
