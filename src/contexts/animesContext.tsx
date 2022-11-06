import { createContext, useEffect, useState } from "react";
import { genericApiRequest } from "../config/funtions";
import {
  AnimeContextInterface,
  AnimeEpisodeResultsInterface,
  AnimeInfoResultsInteface,
  AnimesResultsApi,
  ContextAnimeInterface,
  EpisodesResultsInterface,
  GernesAnimeInterface,
  InputResultsInterface,
} from "../interfaces/animesContextInterface/animeContextInterface";


export const AnimeContext = createContext<AnimeContextInterface>(
  {} as AnimeContextInterface
);

export const ContextAnimes = ({ children }: ContextAnimeInterface) => {
  const [typeGet, setTypeGet] = useState("recent-episodes");
  const [recentEpisodes, setRecentEpisodes] = useState<AnimesResultsApi[]>(
    [] as AnimesResultsApi[]
  );
  const [topAiring, setTopAiring] = useState<AnimesResultsApi[]>(
    [] as AnimesResultsApi[]
  );
  const [dubs, setDubs] = useState<AnimesResultsApi[]>(
    [] as AnimesResultsApi[]
  );
  const [inputResults, setInputResults] = useState<InputResultsInterface[]>(
    [] as InputResultsInterface[]
  );
  const [loading, setLoading] = useState(true);
  const [seachInput, setSeachInput] = useState("");
  const [loadingInput, setLoadingInput] = useState(true);


  const [animeIdInfo, setAnimeIdInfo] = useState("");
  const [animeInfo, setAnimeInfo] = useState<AnimeInfoResultsInteface[]>(
    [] as AnimeInfoResultsInteface[]
  );
  const [listEpisodes, setListEpisode] = useState<EpisodesResultsInterface[]>(
    [] as EpisodesResultsInterface[]
  );
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [loadingInfoEp, setloadingInfoEp] = useState(true)

  const [episodeId, setEpisodeId] = useState("");
  const [servidorEpisode, setServidorEpisode] = useState("vidcdn");
  const [episodesResults, setEpisodesResults] = useState<
    AnimeEpisodeResultsInterface[]
  >([] as AnimeEpisodeResultsInterface[]);
  const [loadingEp, setLoadingEp] = useState(true);

  const [geners, setGeners] = useState("");
  const [animesgeners, getAnimesGerers] = useState<GernesAnimeInterface[]>(
    [] as GernesAnimeInterface[]
  );
  const [loadingGener, setLoadingGener] = useState(true)

  const [nextEp, setNetxEp] = useState<AnimeEpisodeResultsInterface[]>(
    [] as AnimeEpisodeResultsInterface[]
  );
  const [previosEp, setPreviosEp] = useState<AnimeEpisodeResultsInterface[]>(
    [] as AnimeEpisodeResultsInterface[]
  );


  useEffect(() => {
    setLoadingInfo(true);
    typeGet == "recent-episodes"
      ? genericApiRequest({
          restLink: `?latest`,
          dataBase: setRecentEpisodes,
        }).finally(() => {
          return setTypeGet("top-airing");
        })
      : typeGet == "top-airing"
      ? genericApiRequest({
          restLink: `?populares`,
          dataBase: setTopAiring,
        }).finally(() => {
          return setTypeGet("dub");
        })
      : typeGet == "dub" &&
        genericApiRequest({
          restLink: `?categoria=dublado`,
          dataBase: setDubs,
        }).finally(() => {
          return setLoading(false);
        });

        
  }, [typeGet]);

  useEffect(() => {
    inputResults.length == 0 &&
      genericApiRequest({ restLink: `??latest`, dataBase: setInputResults }).finally(() => setLoadingInput(false));
  }, []);

  useEffect(() => {
    if (geners !== "") {
      setLoadingGener(true)
      genericApiRequest({
        restLink: `?categoria=${geners}`,
        dataBase: getAnimesGerers,
      }).finally(() => setLoadingGener(false));
    }
  }, [geners]);

  useEffect(() => {
    setLoadingInfo(true);
    animeIdInfo !== "" &&
      animeIdInfo != "undefined" &&
      genericApiRequest({
        restLink: `?info=${animeIdInfo}`,
        dataBase: setAnimeInfo,
      }).finally(() => setloadingInfoEp(false))

    setLoadingInfo(true);
    animeIdInfo !== "" &&
      genericApiRequest({
        restLink: `?cat_id=${animeIdInfo}`,
        dataBase: setListEpisode,
      }).finally(() => setLoadingInfo(false));
  }, [animeIdInfo]);

  useEffect(() => {
    setLoadingInfo(true);
    setLoadingEp(true);

    episodeId !== "" &&
      episodeId != "undefined" &&
      genericApiRequest({
        restLink: `?episodios=${episodeId}`,
        dataBase: setEpisodesResults,
      }).finally(() => {
        setLoadingInfo(false);
        setLoadingEp(false);
      });
  }, [episodeId, servidorEpisode]);

  useEffect(() => {
    episodeId !== "" &&
      episodeId != "undefined" &&
      genericApiRequest({
        restLink: `?episodios=${episodeId}&catid=${animeIdInfo}&next`,
        dataBase: setNetxEp,
      });
  }, [nextEp, episodeId]);

  useEffect(() => {
    episodeId !== "" &&
      episodeId != "undefined" &&
      genericApiRequest({
        restLink: `?episodios=${episodeId}&catid=${animeIdInfo}&previous`,
        dataBase: setPreviosEp,
      });
  }, [previosEp, episodeId]);

  return (
    <AnimeContext.Provider
      value={{
        recentEpisodes,
        topAiring,
        dubs,
        inputResults,
        loading,
        setLoading,
        setSeachInput,
        seachInput,
        animeInfo,
        setAnimeIdInfo,
        loadingInfo,
        setLoadingInfo,
        listEpisodes,
        setEpisodeId,
        setServidorEpisode,
        episodesResults,
        nextEp,
        setNetxEp,
        previosEp,
        setPreviosEp,
        loadingEp,
        animesgeners,
        setGeners,
        loadingInfoEp,
        loadingGener,
        loadingInput,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
