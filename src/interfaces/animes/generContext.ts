import { ReactNode } from "react";
import { Interface } from "readline";

export interface GenerContextComponentInterface {
  children: ReactNode;
}

export interface GernesAnimeInterface {
  id: string;
  category_name: string;
  category_image: string;
  category_id?: string;
  title?: string;
  video_id?: string;
}

export interface GenerContexInteface {
  loadingGener: boolean;
  animesgeners: GernesAnimeInterface[];
  setGeners: React.Dispatch<React.SetStateAction<string>>;
}
