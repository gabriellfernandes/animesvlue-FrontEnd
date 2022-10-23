import { ReactNode } from "react";

export interface ContextAnimeInterface {
  children: ReactNode;
}

export interface AnimesResultReleaseInterface {
  episodeId: string;
  animeId?: string;
  animeTitle: string;
  episodeNum: string;
  subOrDub: string;
  animeImg: string;
  episodeUrl: string;
}

export interface AnimesResultsTopAiringInterface {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  latestEp: string;
  animeUrl: string;
  genres: [""];
}

export interface AnimesResultsPopularInterface {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releasedDate: string;
  animeUrl: string;
}

export interface InputResultsInterface {
  animeId: string;
  animeTitle: string;
  animeUrl: string;
  animeImg: string;
  status: string;
}


export interface AnimeInfoResultsInteface {
    animeTitle: string;
    type: string;
    releasedDate: string;
    status: string;
    genres: [""];
    otherNames: string;
    synopsis: string;
    animeImg: string;
    totalEpisodes: string;
    episodesList: [
      {
        episodeId: string;
        episodeNum: string;
        episodeUrl: string;
      }
    ];
  }
export interface AnimeContextInterface {
  topAiring: AnimesResultsTopAiringInterface[];
  recentEpisodes: AnimesResultReleaseInterface[];
  popular: AnimesResultsPopularInterface[];
  loading: boolean;
  setSeachInput: React.Dispatch<React.SetStateAction<string>>;
  inputResults: InputResultsInterface[];
  seachInput: string;
  setAnimeIdInfo: React.Dispatch<React.SetStateAction<string>>;
  animeInfo: AnimeInfoResultsInteface;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingInfo: boolean
  setLoadingInfo: React.Dispatch<React.SetStateAction<boolean>>;
}
