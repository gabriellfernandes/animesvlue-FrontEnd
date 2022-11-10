import { ReactNode } from "react";

export interface InfoAndEpisodeContextComponentsInterface {
  children: ReactNode;
}

export interface AnimeInfoResultsInteface {
  id: string;
  category_name: string;
  category_image: string;
  category_description: string;
  category_genres: string;
  ano: string;
  count: string;
  off: string;
}

export interface EpisodesResultsInterface {
  video_id: string;
  category_id: string;
  title: string;
}

export interface AnimeEpisodeResultsInterface {
  video_id: string;
  category_id: string;
  location: string;
  locationsd: string;
  title: string;
}

export interface InfoAndEpisodeContextInterface {
  animeInfo: AnimeInfoResultsInteface[];
  loadingInfo: boolean;
  loadingInfoEp: boolean;
  episodesResults: AnimeEpisodeResultsInterface[];
  nextEp: AnimeEpisodeResultsInterface[];
  episodesList: EpisodesResultsInterface[];
  episodesListSpecial: EpisodesResultsInterface[];
  loadingEp: boolean;
  previosEp: AnimeEpisodeResultsInterface[];
  setPreviosEp: React.Dispatch<
    React.SetStateAction<AnimeEpisodeResultsInterface[]>
  >;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setNextEp: React.Dispatch<
    React.SetStateAction<AnimeEpisodeResultsInterface[]>
  >;
  setLoadingInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setServidorEpisode: React.Dispatch<React.SetStateAction<string>>;
}
