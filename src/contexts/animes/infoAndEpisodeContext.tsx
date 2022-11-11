import { createContext, useContext, useEffect, useState } from "react";
import {
  descendingOrGrowingList,
  EpisodeNameValidate,
  EpisodeNameValidateOva,
} from "../../config/episodesFunctions";
import { genericApiRequest } from "../../config/genericApiResquest";
import {
  AnimeEpisodeResultsInterface,
  AnimeInfoResultsInteface,
  EpisodesResultsInterface,
  InfoAndEpisodeContextComponentsInterface,
  InfoAndEpisodeContextInterface,
} from "../../interfaces/animes/infoContextInterface";
import { GlobalContext } from "../globalContext";

export const InfoAndEpisodeContext =
  createContext<InfoAndEpisodeContextInterface>(
    {} as InfoAndEpisodeContextInterface
  );

export const InfoAndEpisodeContextComponent = ({
  children,
}: InfoAndEpisodeContextComponentsInterface) => {
  const { episodeId, animeIdInfo } = useContext(GlobalContext);

  const [animeInfo, setAnimeInfo] = useState<AnimeInfoResultsInteface[]>(
    [] as AnimeInfoResultsInteface[]
  );
  const [listEpisodes, setListEpisode] = useState<EpisodesResultsInterface[]>(
    [] as EpisodesResultsInterface[]
  );
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [servidorEpisode, setServidorEpisode] = useState("vidcdn");
  const [episodesResults, setEpisodesResults] = useState<
    AnimeEpisodeResultsInterface[]
  >([] as AnimeEpisodeResultsInterface[]);
  const [loadingEp, setLoadingEp] = useState(true);
  const [loadingInfoEp, setloadingInfoEp] = useState(true);
  const [nextEp, setNextEp] = useState<AnimeEpisodeResultsInterface[]>(
    [] as AnimeEpisodeResultsInterface[]
  );
  const [previosEp, setPreviosEp] = useState<AnimeEpisodeResultsInterface[]>(
    [] as AnimeEpisodeResultsInterface[]
  );
  const [episodesList, setepisodesList] = useState<EpisodesResultsInterface[]>(
    [] as EpisodesResultsInterface[]
  );
  const [episodesListSpecial, setEpisodesListSpecial] = useState<
    EpisodesResultsInterface[]
  >([] as EpisodesResultsInterface[]);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoadingInfo(true);
    setloadingInfoEp(true);

    animeIdInfo !== "" &&
      animeIdInfo != "undefined" &&
      genericApiRequest({
        restLink: `?info=${animeIdInfo}`,
        dataBase: setAnimeInfo,
      }).finally(() => setLoadingInfo(false));

    setloadingInfoEp(true);
    animeIdInfo !== "" &&
      genericApiRequest({
        restLink: `?cat_id=${animeIdInfo}`,
        dataBase: setListEpisode,
      }).finally(() => {
        setepisodesList([])
        setEpisodesListSpecial([])
        setloadingInfoEp(false);
      });
  }, [animeIdInfo]);

  useEffect(() => {
    setLoadingEp(true);

    episodeId !== "" &&
      episodeId != "undefined" &&
      genericApiRequest({
        restLink: `?episodios=${episodeId}`,
        dataBase: setEpisodesResults,
      }).finally(() => setloadingInfoEp(false));
  }, [episodeId, servidorEpisode]);

  useEffect(() => {
    !loadingInfo &&
      !loadingInfoEp &&
      episodesResults.length != 0 &&
      episodesList.length != 0 &&
      setLoadingEp(false);
  }, [loadingInfo, loadingInfoEp, episodeId, episodesResults, episodesList]);

  useEffect(() => {
    episodeId !== "" &&
      episodeId != "undefined" &&
      genericApiRequest({
        restLink: `?episodios=${episodeId}&catid=${animeIdInfo}&next`,
        dataBase: setNextEp,
      });
      console.log("rodei next")
  }, [episodeId]);

  useEffect(() => {
    episodeId !== "" &&
      episodeId != "undefined" &&
      genericApiRequest({
        restLink: `?episodios=${episodeId}&catid=${animeIdInfo}&previous`,
        dataBase: setPreviosEp,
      });

      episodeId !== "" &&
      episodeId != "undefined" &&
      console.log("rodei previous")
  }, [episodeId]);

  useEffect(() => {
    !loadingInfo &&
      !loadingInfoEp &&
      listEpisodes.length != 0 &&
      episodesList.length == 0 &&
      setepisodesList(EpisodeNameValidate(listEpisodes));

    !loadingInfo &&
      !loadingInfoEp &&
      listEpisodes.length != 0 &&
      episodesListSpecial.length == 0 &&
      setEpisodesListSpecial(
        EpisodeNameValidateOva(listEpisodes, animeInfo[0].category_name)
      );

      console.log(listEpisodes)
  }, [loadingInfo, loadingInfoEp, listEpisodes]);

  useEffect(() => {
    episodesList.length != 0 &&
      setepisodesList(descendingOrGrowingList(episodesList, type));
      episodesListSpecial.length != 0 &&
      setEpisodesListSpecial(
        descendingOrGrowingList(episodesListSpecial, type)
      );
  }, [type]);

  return (
    <InfoAndEpisodeContext.Provider
      value={{
        animeInfo,
        episodesResults,
        loadingEp,
        loadingInfo,
        loadingInfoEp,
        nextEp,
        previosEp,
        episodesList,
        episodesListSpecial,
        search, 
        setSearch,
        setType,
        setLoadingInfo,
        setNextEp,
        setPreviosEp,
        setServidorEpisode,
      }}
    >
      {children}
    </InfoAndEpisodeContext.Provider>
  );
};
