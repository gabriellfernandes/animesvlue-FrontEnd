import { createContext, useContext, useEffect, useState } from "react";
import { genericApiRequest } from "../../config/genericApiResquest";
import {
  AnimesHomeResultsInterface,
  HomeContexInteface,
  HomeContextComponentsInterface,
} from "../../interfaces/animes/homeContextInterface";
import { GlobalContext } from "../globalContext";

export const HomeContext = createContext<HomeContexInteface>(
  {} as HomeContexInteface
);

export const HomeContextComponent = ({
  children,
}: HomeContextComponentsInterface) => {
  const [typeGet, setTypeGet] = useState("recent-episodes");
  const [recentEpisodes, setRecentEpisodes] = useState<
    AnimesHomeResultsInterface[]
  >([] as AnimesHomeResultsInterface[]);

  const [dubs, setDubs] = useState<AnimesHomeResultsInterface[]>(
    [] as AnimesHomeResultsInterface[]
  );
  const [loading, setLoading] = useState(true);

  const { topAiring } = useContext(GlobalContext);

  useEffect(() => {
    genericApiRequest({
      restLink: `?latest`,
      dataBase: setRecentEpisodes,
    });

    genericApiRequest({
      restLink: `?categoria=dublado`,
      dataBase: setDubs,
    });
  }, [typeGet]);

  useEffect(() => {
    dubs.length != 0 &&
      topAiring.length != 0 &&
      recentEpisodes.length != 0 &&
      setLoading(false);
  }, [topAiring, dubs, recentEpisodes]);

  return (
    <HomeContext.Provider value={{ dubs, recentEpisodes, loading, setLoading }}>
      {children}
    </HomeContext.Provider>
  );
};
