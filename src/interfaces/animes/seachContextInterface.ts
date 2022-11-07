import { ReactNode } from "react";

export interface SeachContextComponentInterface {
  children: ReactNode;
}

export interface SeachResultsInterface {
  video_id: string;
  category_id?: string;
  title?: string;
  category_name?: string;
  category_image: string;
  id?: string;
}

export interface SeachContextInterface {
loadingFiltred: boolean;
  animesFiltred: SeachResultsInterface[];
}
