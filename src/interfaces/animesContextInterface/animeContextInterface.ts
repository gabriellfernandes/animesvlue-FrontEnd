import { ReactNode } from "react";
import { GernesAnimeInterface } from "../animes/generContext";
import { AnimesHomeResultsInterface } from "../animes/homeContextInterface";
import {
  AnimeEpisodeResultsInterface,
  AnimeInfoResultsInteface,
  EpisodesResultsInterface,
} from "../animes/infoContextInterface";
import { SeachResultsInterface } from "../animes/seachContextInterface";

export interface ContextAnimeInterface {
  children: ReactNode;
}


export interface ApiRequestInterface {
  restLink: string;
  dataBase:
    | React.Dispatch<React.SetStateAction<AnimesHomeResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<EpisodesResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<SeachResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<AnimeInfoResultsInteface[]>>
    | React.Dispatch<React.SetStateAction<AnimeEpisodeResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<GernesAnimeInterface[]>>;
}

