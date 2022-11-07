import { createContext, useEffect, useState } from "react";
import { genericApiRequest } from "../config/funtions";
import { AnimesHomeResultsInterface } from "../interfaces/animes/homeContextInterface";
import { GlobalContextComponentsInterface, GlobalContextInterface } from "../interfaces/globalContextInterface.ts/globalContextInterface";


export const GlobalContext = createContext<GlobalContextInterface>(
  {} as GlobalContextInterface
);

export const GlobalContextComponent = ({ children }: GlobalContextComponentsInterface) => {
    const [animeIdInfo, setAnimeIdInfo] = useState("");
    const [episodeId, setEpisodeId] = useState("");

    const [topAiring, setTopAiring] = useState<AnimesHomeResultsInterface[]>(
      [] as AnimesHomeResultsInterface[]
    );

    useEffect(() => {
      genericApiRequest({
        restLink: `?populares`,
        dataBase: setTopAiring,
      });
    }, [])

  return (
    <GlobalContext.Provider
      value={{
        animeIdInfo,
        episodeId,
        topAiring,
        setAnimeIdInfo,
        setEpisodeId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
