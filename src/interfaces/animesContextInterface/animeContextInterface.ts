import { ReactNode } from "react";
import { GernesAnimeInterface } from "../animes/generContext";
import { AnimesHomeResultsInterface } from "../animes/homeContextInterface";
import {
  AnimeEpisodeResultsInterface,
  AnimeInfoResultsInteface,
  EpisodesResultsInterface,
} from "../animes/infoContextInterface";

export interface ContextAnimeInterface {
  children: ReactNode;
}

export interface InputResultsInterface {
  video_id: string;
  category_id?: string;
  title?: string;
  category_name?: string;
  category_image: string;
  id?: string;
}

export interface ApiRequestInterface {
  restLink: string;
  dataBase:
    | React.Dispatch<React.SetStateAction<AnimesHomeResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<EpisodesResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<InputResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<AnimeInfoResultsInteface[]>>
    | React.Dispatch<React.SetStateAction<AnimeEpisodeResultsInterface[]>>
    | React.Dispatch<React.SetStateAction<GernesAnimeInterface[]>>;
}

export interface AnimeContextInterface {
  setSeachInput: React.Dispatch<React.SetStateAction<string>>;
  inputResults: InputResultsInterface[];
  seachInput: string;
  loadingInput: boolean;
  setLoadingInput: React.Dispatch<React.SetStateAction<boolean>>;
}
