import { createContext, useState } from "react";
import { GlobalContextComponentsInterface, GlobalContextInterface } from "../interfaces/globalContextInterface.ts/globalContextInterface";


export const GlobalContext = createContext<GlobalContextInterface>(
  {} as GlobalContextInterface
);

export const GlobalContextComponent = ({ children }: GlobalContextComponentsInterface) => {
    const [animeIdInfo, setAnimeIdInfo] = useState("");
    const [episodeId, setEpisodeId] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        animeIdInfo,
        episodeId,
        setAnimeIdInfo,
        setEpisodeId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
