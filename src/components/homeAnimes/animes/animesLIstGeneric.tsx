import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../../../contexts/animesContext";
import { AnimesListGenericInterface } from "../../../interfaces/animesListGeneric/animesListGenericInteface";
import { CardAnime } from "../../CardAnime/cardAnime";
import { DivAnimeList, DivConteinerAnimes } from "./styled";

export const AnimesListGeneric = ({ type }: AnimesListGenericInterface) => {
  const { recentEpisodes, topAiring, popular, loading } =
    useContext(AnimeContext);

  return (
    <DivConteinerAnimes>
      {!loading && type == "recent-episodes" ? (
        <div>
          <h2>Recent Episodes</h2>
          <span>-------------</span>
          <DivAnimeList>
            {recentEpisodes.map((elem) => {
              return (
                <CardAnime title={elem.animeTitle} image={elem.animeImg} />
              );
            })}
          </DivAnimeList>
        </div>
      ) : (
        <></>
      )}
      {!loading && type == "top-airing" ? (
        <div>
          <h2>Top Airing</h2>
          <span>-----------------</span>
          <DivAnimeList>
            {topAiring.map((elem) => {
              return (
                <CardAnime title={elem.animeTitle} image={elem.animeImg} />
              );
            })}
          </DivAnimeList>
        </div>
      ) : (
        <></>
      )}
      {!loading && type == "popular" ? (
        <div>
          <h2>Popular</h2>
          <span>-----------------</span>
          <DivAnimeList>
            {popular.map((elem) => {
              return (
                <CardAnime title={elem.animeTitle} image={elem.animeImg} />
              );
            })}
          </DivAnimeList>
        </div>
      ) : (
        <></>
      )}
    </DivConteinerAnimes>
  );
};
