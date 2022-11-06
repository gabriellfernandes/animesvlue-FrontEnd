import { ReactNode } from "react";

export interface HomeContextComponentsInterface {
  children: ReactNode;
}


export interface AnimesHomeResultsInterface{
    video_id: string;
    category_id?: string;
    title?: string;
    category_name?: string;
    category_image: string;
    id?: string;
  }


  export interface HomeContexInteface {
    topAiring: AnimesHomeResultsInterface[];
    recentEpisodes: AnimesHomeResultsInterface[];
    dubs: AnimesHomeResultsInterface[];
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }