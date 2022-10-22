import { ReactNode } from "react";

export interface ContextAnimeInterface {
    children: ReactNode
}

export interface AnimesResultReleaseInterface {
        episodeId: string;
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
    genres: string[]
}

export interface AnimesResultsPopularInterface {
    animeId: string;
    animeTitle: string;
    animeImg: string;
    releasedDate: string;
    animeUrl: string;
}

export interface AnimeContextInterface {
    topAiring: AnimesResultsTopAiringInterface[];
    recentEpisodes: AnimesResultReleaseInterface[];
    popular: AnimesResultsPopularInterface[]
    loading: boolean
}