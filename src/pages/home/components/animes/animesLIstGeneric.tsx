import { useContext } from "react";
import { AnimeContext } from "../../../../contexts/animesContext";
import { AnimesListGenericInterface } from "../../../../interfaces/animesListGeneric/animesListGenericInteface";
import { AnimesCarousel } from "./animesCarousel";
import { DivConteinerAnimes } from "./styled";
import { v4 as uuid } from "uuid";

export const AnimesListGeneric = ({ type }: AnimesListGenericInterface) => {
  const { recentEpisodes, topAiring, popular, loading } =
    useContext(AnimeContext);

  console.log(uuid());

  return (
    <>
      {
        <DivConteinerAnimes>
          {!loading && type === "recent-episodes" ? (
            <AnimesCarousel
              key={uuid()}
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
              key={uuid()}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
          {!loading && type === "popular" ? (
            <AnimesCarousel
              title="Popular"
              list={popular}
              key={uuid()}
            ></AnimesCarousel>
          ) : (
            <></>
          )}
        </DivConteinerAnimes>
      }
    </>
  );
};
