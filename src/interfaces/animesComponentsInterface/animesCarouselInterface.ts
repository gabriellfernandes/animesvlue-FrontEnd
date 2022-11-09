import { AnimesHomeResultsInterface } from "../animes/homeContextInterface";
import { EpisodesResultsInterface } from "../animes/infoContextInterface";

export interface AnimesCarouselInterface {
  title: string;
  list: AnimesHomeResultsInterface[];
}

export interface AnimeEpisodesListInterface {
  eplist: EpisodesResultsInterface[];
  animeTitle: string;
}
