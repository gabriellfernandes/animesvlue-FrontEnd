import {
  AnimesResultReleaseInterface,
  AnimesResultsPopularInterface,
  AnimesResultsTopAiringInterface,
} from "../animesContextInterface/animeContextInterface";

export interface AnimesCarouselInterface {
  title: string;
  list:
    | AnimesResultsTopAiringInterface[]
    | AnimesResultReleaseInterface[]
    | AnimesResultsPopularInterface[];
}

export interface AnimeEpisodesListInterface {
  eplist: [{ episodeId: string; episodeNum: string; episodeUrl: string }];
  animeImg: string;
  animeTitle: string;
}
