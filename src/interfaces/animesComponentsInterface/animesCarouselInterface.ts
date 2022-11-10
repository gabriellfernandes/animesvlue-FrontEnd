import { AnimesHomeResultsInterface } from "../animes/homeContextInterface";
import { EpisodesResultsInterface } from "../animes/infoContextInterface";

export interface AnimesCarouselInterface {
  title: string;
  list: AnimesHomeResultsInterface[];
}

export interface AnimeEpisodesListInterface {
  episodesListSpecial: EpisodesResultsInterface[];
  episodesList: EpisodesResultsInterface[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}
