import { ReactNode } from "react";

export interface GlobalContextComponentsInterface {
  children: ReactNode;
}

export interface GlobalContextInterface {
  animeIdInfo: string;
  episodeId: string;
  setAnimeIdInfo: React.Dispatch<React.SetStateAction<string>>;
  setEpisodeId: React.Dispatch<React.SetStateAction<string>>;
}
