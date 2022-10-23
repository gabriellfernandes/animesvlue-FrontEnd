import { AnimesCarouselInterface } from "../../../../interfaces/animesComponentsInterface/animesCarouselInterface";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";
import { CardAnime } from "../../../../components/CardAnime/cardAnime";
import { DivAnimeList } from "./styled";

export const AnimesCarousel = ({ title, list }: AnimesCarouselInterface) => {
  return (
    <div>
      <h2>{title}</h2>
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
        {list.map((elem) => {
          return (
            <Carousel.Slide>
              <DivAnimeList>
                <CardAnime
                  title={elem.animeTitle}
                  image={elem.animeImg}
                  animeId={elem.animeId}
                />
              </DivAnimeList>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};
