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
          slideSize="18%"
          height={372}
          align="start"
          slideGap="xl"
          controlsOffset="xl"
          dragFree
          slidesToScroll={3}
          nextControlIcon={<IconArrowRight size={29} />}
          previousControlIcon={<IconArrowLeft size={29} />}
        >
          {list.map((elem) => {
            console.log(elem.video_id)
            return (
              <Carousel.Slide>
                <DivAnimeList>
                  <CardAnime
                    title={
                      elem.title != undefined
                        ? elem.title!
                        : elem.category_name!
                    }
                    image={`https://cdn.appanimeplus.tk/img/${elem.category_image}`}
                    animeId={elem.id != undefined ? elem.id : elem.category_id}
                    episodeId={elem.video_id != undefined ? elem.video_id : ""}
                  />
                </DivAnimeList>
              </Carousel.Slide>
            );
          })}
        </Carousel>
    </div>
  );
};
