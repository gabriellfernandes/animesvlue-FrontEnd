import { createContext, useEffect, useState } from "react";
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
import ApiIAnime from "../services/apiAnimes";

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
  const [animeIdInfo, setAnimeIdInfo] = useState("");
  const [animeInfo, setAnimeInfo] = useState<AnimeInfoResultsInteface>(
    {} as AnimeInfoResultsInteface
  );
  const [listEpisodes, setListEpisode] = useState<EpisodesResultsInterface[]>(
    [] as EpisodesResultsInterface[]
  );

  const [loadingInfo, setLoadingInfo] = useState(true);

  const [episodeId, setEpisodeId] = useState("");
  const [servidorEpisode, setServidorEpisode] = useState("vidcdn");
  const [episodesResults, setEpisodesResults] =
    useState<AnimeEpisodeResultsInterface>({} as AnimeEpisodeResultsInterface);
  const [loadingEp, setLoadingEp] = useState(true);
  const baseUrl = "play-api.php";
  const [geners, setGeners] = useState("");
  const [animesgeners, getAnimesGerers] = useState<GernesAnimeInterface[]>(
    [] as GernesAnimeInterface[]
  );
  const [nextEp, setNetxEp] = useState<AnimeEpisodeResultsInterface[]>([] as AnimeEpisodeResultsInterface[]);
  const [previosEp, setPreviosEp] = useState<AnimeEpisodeResultsInterface[]>([] as AnimeEpisodeResultsInterface[])

  useEffect(() => {
    setLoading(true);

    typeGet == "recent-episodes"
      ? ApiIAnime.get(`${baseUrl}?latest`)
          .then((res) => {
            setRecentEpisodes(res.data);
          })
          .finally(() => {
            return setTypeGet("top-airing");
          })
      : typeGet == "top-airing"
      ? ApiIAnime.get(`${baseUrl}?populares`)
          .then((res) => {
            setTopAiring(res.data);
          })
          .finally(() => {
            return setTypeGet("dub");
          })
      : typeGet == "dub" &&
        ApiIAnime.get(`${baseUrl}?categoria=dublado`)
          .then((res) => setDubs(res.data))
          .finally(() => {
            return setLoading(false);
          });
  }, [typeGet]);

  useEffect(() => {
    inputResults.length == 0 &&
      ApiIAnime.get(`${baseUrl}??latest`).then((res) => {
        setInputResults(res.data);
      });
  }, []);

  useEffect(() => {
    if (geners !== "") {
      setLoading(true);
      ApiIAnime.get(`${baseUrl}?categoria=${geners}`)
        .then((res) => getAnimesGerers(res.data))
        .finally(() => setLoading(false));
    }
  }, [geners]);

  useEffect(() => {
    setLoadingInfo(true);

    animeIdInfo !== "" &&
      animeIdInfo != "undefined" &&
      ApiIAnime.get(`${baseUrl}?info=${animeIdInfo}`)
        .then((res) => {
          setAnimeInfo(res.data[0]);
        })
        .finally(() => setLoadingInfo(false));

    setLoadingInfo(true);
    animeIdInfo !== "" &&
      ApiIAnime.get(`${baseUrl}?cat_id=${animeIdInfo}`)
        .then((res) => {
          setListEpisode(res.data);
        })
        .finally(() => setLoadingInfo(false));
  }, [animeIdInfo]);

  useEffect(() => {
    setLoadingInfo(true);
    setLoadingEp(true);

    episodeId !== "" &&
      episodeId != "undefined" &&
      ApiIAnime.get(`/${baseUrl}?episodios=${episodeId}`)
        .then((res) => {
          setEpisodesResults(res.data[0]);
        })
        .finally(() => {
          setLoadingInfo(false);
          setLoadingEp(false);
        });

   
  }, [episodeId, servidorEpisode]);

  useEffect(() => {
    episodeId !== "" &&
    episodeId != "undefined" &&
    ApiIAnime.get(
      `/${baseUrl}?episodios=${episodeId}&catid=${animeIdInfo}&next`
    ).then((res) => {
      setNetxEp(res.data);
    });
  }, [nextEp, episodeId])

  useEffect(() => {
    episodeId !== "" &&
    episodeId != "undefined" &&
    ApiIAnime.get(
      `/${baseUrl}?episodios=${episodeId}&catid=${animeIdInfo}&previous`
    ).then((res) => {
      setPreviosEp(res.data);
    });
  }, [previosEp, episodeId])

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
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
