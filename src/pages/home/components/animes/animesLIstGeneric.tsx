import { useContext } from "react";
import { AnimeContext } from "../../../../contexts/animesContext";
import { AnimesListGenericInterface } from "../../../../interfaces/animesListGeneric/animesListGenericInteface";
import { AnimesCarousel } from "./animesCarousel";
import { DivConteinerAnimes } from "./styled";


export const AnimesListGeneric = ({ type }: AnimesListGenericInterface) => {
  const { recentEpisodes, topAiring, popular, loading } =
    useContext(AnimeContext);
    
  return (
    <>
      {
        <DivConteinerAnimes>
          {!loading && type === "recent-episodes" ? (
            <AnimesCarousel
              title="Recent Episodes"
              list={recentEpisodes}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
          {!loading && type === "top-airing" ? (
            <AnimesCarousel
              title="Top Airing"
              list={topAiring}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
          {!loading && type === "popular" ? (
            <AnimesCarousel
              title="Popular"
              list={popular}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
        </DivConteinerAnimes>
      }
    </>
  );
};
