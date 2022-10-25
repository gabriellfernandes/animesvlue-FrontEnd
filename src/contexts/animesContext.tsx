import { createContext, useEffect, useState } from "react";
import {
  AnimeContextInterface,
  AnimeInfoResultsInteface,
  AnimesResultReleaseInterface,
  AnimesResultsPopularInterface,
  AnimesResultsTopAiringInterface,
  ContextAnimeInterface,
  InputResultsInterface,
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
  const [inputResults, setInputResults] = useState<InputResultsInterface[]>(
    [] as InputResultsInterface[]
  );
  const [loading, setLoading] = useState(true);
  const [seachInput, setSeachInput] = useState("");
  const [animeIdInfo, setAnimeIdInfo] = useState("");
  const [animeInfo, setAnimeInfo] = useState<AnimeInfoResultsInteface>(
    {} as AnimeInfoResultsInteface
  );
  const [loadingInfo, setLoadingInfo] = useState(true)

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

  useEffect(() => {
    setLoading(true);

    seachInput !== "" &&
      ApiIAnime.get(`search?keyw=${seachInput}`)
        .then((res) => {
          setInputResults(res.data);
        })
        .finally(() => setLoading(false));
  }, [seachInput]);

  useEffect(() => {
    setLoadingInfo(true);

    animeIdInfo !== "" && animeIdInfo != "undefined" &&
      ApiIAnime.get(`/anime-details/${animeIdInfo}`)
        .then((res) => {
          setAnimeInfo(res.data);
        })
        .finally(() => setLoadingInfo(false));
  }, [animeIdInfo]);

  return (
    <AnimeContext.Provider
      value={{
        recentEpisodes,
        topAiring,
        popular,
        inputResults,
        loading,
        setLoading,
        setSeachInput,
        seachInput,
        animeInfo,
        setAnimeIdInfo,
        loadingInfo,
        setLoadingInfo
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
