import { EpisodesResultsInterface } from "../interfaces/animes/infoContextInterface";

export const verifyOvaOrEpecial = (epName: string) => {
  const thereIsOVAInTheName = epName.toLocaleLowerCase().includes("ova");
  const thereIsEspecialInTheName = epName
    .toLocaleLowerCase()
    .includes("especial");
  const thereIsSpInTheName = epName.toLocaleLowerCase().includes("sp");
  const thereIsMovie = epName.toLocaleLowerCase().includes("trailer");

  if (
    thereIsOVAInTheName ||
    thereIsEspecialInTheName ||
    thereIsSpInTheName ||
    thereIsMovie
  ) {
    return true;
  } else {
    return false;
  }
};

export const existOvaEp = (list: EpisodesResultsInterface[]) => {
  const existOva = list.find((elem) =>
    elem.title.toLocaleLowerCase().includes("ova")
  );

  if (existOva) {
    return true;
  } else {
    return false;
  }
};

export const descendingOrGrowingList = (
  list: EpisodesResultsInterface[],
  type: string
) => {
  return type == "asc" ? growingList(list) : descendingList(list);
};

export const growingList = (list: EpisodesResultsInterface[]) => {
  const neverEndingListsEpisode = removeFinalEpisode(list);
  const finalEp = existFinalEpisode(list);

  const organizedList = neverEndingListsEpisode.sort((a, b) => {
    if (
      Number(a.title.replace(/[^0-9]/g, "")) >
      Number(b.title.replace(/[^0-9]/g, ""))
    ) {
      return 1;
    } else if (
      Number(a.title.replace(/[^0-9]/g, "")) <
      Number(b.title.replace(/[^0-9]/g, ""))
    ) {
      return -1;
    } else {
      return 0;
    }
  });

  finalEp && organizedList.push(finalEp);
  return organizedList;
};

export const descendingList = (list: EpisodesResultsInterface[]) => {
  const neverEndingListsEpisode = removeFinalEpisode(list);
  const finalEp = existFinalEpisode(list);

  const organizedList = neverEndingListsEpisode.sort((a, b) => {
    if (
      Number(a.title.replace(/[^0-9]/g, "")) >
      Number(b.title.replace(/[^0-9]/g, ""))
    ) {
      return -1;
    } else if (
      Number(a.title.replace(/[^0-9]/g, "")) <
      Number(b.title.replace(/[^0-9]/g, ""))
    ) {
      return 1;
    } else {
      return 0;
    }
  });

  finalEp && organizedList.unshift(finalEp);

  return organizedList;
};

const existFinalEpisode = (list: EpisodesResultsInterface[]) => {
  const finalep = list.filter((elem) => elem.title.includes("Final") && elem);
  return finalep.length != 0 ? finalep[0] : false;
};

const removeFinalEpisode = (list: EpisodesResultsInterface[]) => {
  return list.filter((elem) => !elem.title.includes("Final") && elem);
};

export const EpisodeNameValidate = (list: EpisodesResultsInterface[]) => {
  const organizedList = growingList(list);
  const listSemOva = organizedList.filter(
    (elem) => !verifyOvaOrEpecial(elem.title) && elem
  );
  listSemOva.map((elem, index) => {
    elem.title = `Episódio - ${index + 1}`;
    return elem;
  });

  return listSemOva;
};

export const EpisodeNameValidateOva = (
  list: EpisodesResultsInterface[],
  animeTitle: string
) => {
  const organizedList = growingList(list);
  const listComOva = organizedList.filter(
    (elem) => verifyOvaOrEpecial(elem.title) && elem
  );
  listComOva.map((elem) => {
    elem.title = `${elem.title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(animeTitle, "")}`;
    return elem;
  });

  return listComOva;
};

export const EpisodeNumber = (episodeNumber: string) => {
  const epNumber = episodeNumber.split(" ")[episodeNumber.split(" ").length - 1]
  return epNumber
}