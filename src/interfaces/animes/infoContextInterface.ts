import { ReactNode } from "react";

export interface InfoContextComponentsInterface {
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

export interface InfoContextInterface {
  animeInfo: AnimeInfoResultsInteface[];
  loadingInfo: boolean;
  loadingInfoEp: boolean;
  listEpisodes: EpisodesResultsInterface[];
  setLoadingInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setServidorEpisode: React.Dispatch<React.SetStateAction<string>>;
  episodesResults: AnimeEpisodeResultsInterface[];
  nextEp: AnimeEpisodeResultsInterface[];
  setNetxEp: React.Dispatch<
    React.SetStateAction<AnimeEpisodeResultsInterface[]>
  >;
  previosEp: AnimeEpisodeResultsInterface[];
  setPreviosEp: React.Dispatch<
    React.SetStateAction<AnimeEpisodeResultsInterface[]>
  >;
  loadingEp: boolean;
}
