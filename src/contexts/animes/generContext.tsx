import { createContext, useEffect, useState } from "react";
import { genericApiRequest } from "../../config/genericApiResquest";
import {
  GenerContexInteface,
  GenerContextComponentInterface,
  GernesAnimeInterface,
} from "../../interfaces/animes/generContext";

export const GenerContext = createContext<GenerContexInteface>(
  {} as GenerContexInteface
);

export const GenerContextComponent = ({
  children,
}: GenerContextComponentInterface) => {
  const [geners, setGeners] = useState("");
  const [animesgeners, getAnimesGerers] = useState<GernesAnimeInterface[]>(
    [] as GernesAnimeInterface[]
  );
  const [loadingGener, setLoadingGener] = useState(true);

  useEffect(() => {
    if (geners !== "") {
      setLoadingGener(true);
      genericApiRequest({
        restLink: `?categoria=${geners}`,
        dataBase: getAnimesGerers,
      }).finally(() => setLoadingGener(false));
    }
  }, [geners]);

  return (
    <GenerContext.Provider value={{ animesgeners, loadingGener, setGeners }}>
      {children}
    </GenerContext.Provider>
  );
};
