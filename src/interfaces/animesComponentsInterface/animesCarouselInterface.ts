import { AnimesHomeResultsInterface } from "../animes/homeContextInterface";
import { EpisodesResultsInterface } from "../animes/infoContextInterface";

export interface AnimesCarouselInterface {
  title: string;
  list: AnimesHomeResultsInterface[];
}

export interface AnimeEpisodesListInterface {
  setType: React.Dispatch<React.SetStateAction<string>>;
  episodesListSpecial: EpisodesResultsInterface[],
  episodesList: EpisodesResultsInterface[];
}
