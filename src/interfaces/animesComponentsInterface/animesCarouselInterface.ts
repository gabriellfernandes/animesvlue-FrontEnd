import {
  AnimesResultsApi, EpisodesResultsInterface
} from "../animesContextInterface/animeContextInterface";

export interface AnimesCarouselInterface {
  title: string;
  list: AnimesResultsApi[]

  
}

export interface AnimeEpisodesListInterface {
  eplist: EpisodesResultsInterface[];
  animeImg: string;
  animeTitle: string;
}
