import { createContext, useEffect, useState } from "react";
import {
  AnimeContextInterface,
  AnimesResultReleaseInterface,
  AnimesResultsPopularInterface,
  AnimesResultsTopAiringInterface,
  ContextAnimeInterface,
} from "../interfaces/animesContextInterface/animeContextInterface";
import ApiIAnime from "../services/apiAnimes";

export const AnimeContext = createContext<AnimeContextInterface>(
  {} as AnimeContextInterface
);

export const ContextAnimes = ({ children }: ContextAnimeInterface) => {
  const [typeGet, setTypeGet] = useState("recent-episodes");
  const [recentEpisodes, setRecentEpisodes] = useState<
    AnimesResultReleaseInterface[]
  >([] as AnimesResultReleaseInterface[]);
  const [topAiring, setTopAiring] = useState<AnimesResultsTopAiringInterface[]>(
    [] as AnimesResultsTopAiringInterface[]
  );
  const [popular, setPopular] = useState<AnimesResultsPopularInterface[]>(
    [] as AnimesResultsPopularInterface[]
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    typeGet == "recent-episodes"
      ? ApiIAnime.get("recent-release")
          .then((res) => setRecentEpisodes(res.data))
          .finally(() => {
            return setTypeGet("top-airing");
          })
      : typeGet == "top-airing"
      ? ApiIAnime.get(`${typeGet}`)
          .then((res) => setTopAiring(res.data))
          .finally(() => {
            return setTypeGet("popular");
          })
      : typeGet == "popular" &&
        ApiIAnime.get(`${typeGet}`)
          .then((res) => setPopular(res.data))
          .finally(() => setLoading(false));
  }, [typeGet]);

  return (
    <AnimeContext.Provider
      value={{ recentEpisodes, topAiring, popular, loading }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
