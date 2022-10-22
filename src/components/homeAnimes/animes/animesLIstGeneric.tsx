import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../../../contexts/animesContext";
import { AnimesListGenericInterface } from "../../../interfaces/animesListGeneric/animesListGenericInteface";
import { CardAnime } from "../../CardAnime/cardAnime";
import { DivAnimeList, DivConteinerAnimes } from "./styled";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';

export const AnimesListGeneric = ({ type }: AnimesListGenericInterface) => {
  const { recentEpisodes, topAiring, popular, loading } =
    useContext(AnimeContext);

  return (
    <DivConteinerAnimes>
      {!loading && type == "recent-episodes" ? (
        <div>
          <h2>Recent Episodes</h2>
          <span>-----</span>
          <Carousel
            slideSize="20%"
            height={371}
            align="center"
            slideGap="md"
            loop
            slidesToScroll={3}
            nextControlIcon={<IconArrowRight size={29} />}
            previousControlIcon={<IconArrowLeft size={29} />}
          >
            {recentEpisodes.map((elem) => {
              return (
                <Carousel.Slide>
                  <DivAnimeList>
                    <CardAnime title={elem.animeTitle} image={elem.animeImg} />
                  </DivAnimeList>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <></>
      )}
      {!loading && type == "top-airing" ? (
        <div>
          <h2>Top Airing</h2>
          <span>-----</span>
          <Carousel
            slideSize="20%"
            height={371}
            align="center"
            slideGap="md"
            loop
            slidesToScroll={3}
            nextControlIcon={<IconArrowRight size={29} />}
            previousControlIcon={<IconArrowLeft size={29} />}
          >
            {topAiring.map((elem) => {
              return (
                <Carousel.Slide>
                  <DivAnimeList>
                    <CardAnime title={elem.animeTitle} image={elem.animeImg} />
                  </DivAnimeList>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <></>
      )}
      {!loading && type == "popular" ? (
        <div>
          <h2>Popular</h2>
          <span>-----</span>
          <Carousel
            slideSize="20%"
            height={372}
            align="center"
            slideGap="md"
            loop
            slidesToScroll={3}
            className="carroselAnimes"
            nextControlIcon={<IconArrowRight size={29} />}
            previousControlIcon={<IconArrowLeft size={29} />}
          >
            {popular.map((elem) => {
              return (
                <Carousel.Slide>
                  <DivAnimeList>
                    <CardAnime title={elem.animeTitle} image={elem.animeImg} />
                  </DivAnimeList>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <></>
      )}
    </DivConteinerAnimes>
  );
};
