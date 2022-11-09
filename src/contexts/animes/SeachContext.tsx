import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { genericApiRequest } from "../../config/genericApiResquest";
import {
  SeachContextComponentInterface,
  SeachContextInterface,
  SeachResultsInterface,
} from "../../interfaces/animes/seachContextInterface";

export const SeachContext = createContext<SeachContextInterface>(
  {} as SeachContextInterface
);

export const SeachContextComponent = ({
  children,
}: SeachContextComponentInterface) => {
  const [seachResults, setSeachResults] = useState<SeachResultsInterface[]>(
    [] as SeachResultsInterface[]
  );
  const [loadingInput, setLoadingInput] = useState(true);
  const [loadingFiltred, setLoadingFiltred] = useState(true);
  const { title } = useParams();
  const [animesFiltred, setAnimesFiltred] = useState<SeachResultsInterface[]>(
    [] as SeachResultsInterface[]
  );

  useEffect(() => {
    setLoadingInput(true);
    seachResults.length == 0 &&
      genericApiRequest({
        restLink: `??latest`,
        dataBase: setSeachResults,
      }).finally(() => {
        setLoadingInput(false);
      });
  }, []);

  useEffect(() => {
    !loadingInput && filtredAnimes(title!);
  }, [title, loadingInput]);

  const filtredAnimes = async (seach: string) => {
    setAnimesFiltred([]);
    setLoadingFiltred(true);

    seachResults.map((elem) => {
      return (
        seach.toLocaleLowerCase() != "arcane" &&
        elem
          .category_name!.toLocaleLowerCase()
          .includes(seach!.toLocaleLowerCase()) &&
        setAnimesFiltred((oldItens) => [...oldItens, elem])
      );
    });

    return setLoadingFiltred(false);
  };

  return (
    <SeachContext.Provider
      value={{
        loadingFiltred,
        animesFiltred,
      }}
    >
      {children}
    </SeachContext.Provider>
  );
};
