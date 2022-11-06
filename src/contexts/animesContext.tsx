import { createContext, useEffect, useState } from "react";
import { genericApiRequest } from "../config/funtions";
import {
  AnimeContextInterface,
  ContextAnimeInterface,
  InputResultsInterface,
} from "../interfaces/animesContextInterface/animeContextInterface";


export const AnimeContext = createContext<AnimeContextInterface>(
  {} as AnimeContextInterface
);

export const ContextAnimes = ({ children }: ContextAnimeInterface) => {
 
  const [inputResults, setInputResults] = useState<InputResultsInterface[]>(
    [] as InputResultsInterface[]
  );

  const [seachInput, setSeachInput] = useState("");
  
 
  const [loadingInput, setLoadingInput] = useState(true);

  
  useEffect(() => {
    inputResults.length == 0 &&
      genericApiRequest({ restLink: `??latest`, dataBase: setInputResults }).finally(() => setLoadingInput(false));
  }, []);

  return (
    <AnimeContext.Provider
      value={{
        inputResults,
        setSeachInput,
        seachInput,
        loadingInput,
        setLoadingInput,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
