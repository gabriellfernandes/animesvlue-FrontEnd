import { ReactNode } from "react";

export interface ContextAnimeInterface {
  children: ReactNode;
}

export interface AnimesResultsApi {
  video_id: string;
  category_id?: string;
  title?: string;
  category_name?: string;
  category_image: string;
  id?: string;
}

export interface EpisodesResultsInterface {
  video_id: string;
  category_id: string;
  title: string;
}

export interface InputResultsInterface {
  video_id: string;
  category_id?: string;
  title?: string;
  category_name?: string;
  category_image: string;
  id?: string;
}

export interface GernesAnimeInterface {
  id: string;
  category_name: string;
  category_image: string;
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

export interface AnimeEpisodeResultsInterface {
  video_id: string;
  category_id: string;
  location: string;
  locationsd: string;
  title: string;
}

export interface ApiRequestInterface {
  restLink: string;
  dataBase:
    | React.Dispatch<React.SetStateAction<AnimesResultsApi[]>>
    | React.Dispatch<React.SetStateAction<EpisodesResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<InputResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<AnimeInfoResultsInteface[]>>
    | React.Dispatch<React.SetStateAction<AnimeEpisodeResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<GernesAnimeInterface[]>>;
}

export interface AnimeContextInterface {
  topAiring: AnimesResultsApi[];
  recentEpisodes: AnimesResultsApi[];
  dubs: AnimesResultsApi[];
  loading: boolean;
  setSeachInput: React.Dispatch<React.SetStateAction<string>>;
  inputResults: InputResultsInterface[];
  seachInput: string;
  setAnimeIdInfo: React.Dispatch<React.SetStateAction<string>>;
  animeInfo: AnimeInfoResultsInteface[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingInfo: boolean;
  setLoadingInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setServidorEpisode: React.Dispatch<React.SetStateAction<string>>;
  setEpisodeId: React.Dispatch<React.SetStateAction<string>>;
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
  listEpisodes: EpisodesResultsInterface[];
  animesgeners: GernesAnimeInterface[];
  setGeners: React.Dispatch<React.SetStateAction<string>>;
  loadingInfoEp: boolean;
  loadingGener: boolean;
  loadingInput: boolean;
}
