import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DivConteinerAnimesInput, DivInputPageConteiner } from "./styled";
import { InputResultsInterface } from "../../interfaces/animesContextInterface/animeContextInterface";
import { GenericSeach } from "../../components/genericSeach/genericSeachPage";

export const InputSeachPage = () => {
  const { inputResults, loadingInput, setSeachInput } =
    useContext(AnimeContext);
  const { title } = useParams();
  const [animesFiltred, setAnimesFiltred] = useState<InputResultsInterface[]>(
    [] as InputResultsInterface[]
  );
  const [loadingGeneric, setLoadingGeneric] = useState(true);
  const filtredAnimes = (seach: string) => {
    setAnimesFiltred([]);
    inputResults.map((elem) => {
      return (
        seach.toLocaleLowerCase() != "arcane" &&
        elem
          .category_name!.toLocaleLowerCase()
          .includes(seach!.toLocaleLowerCase()) &&
        setAnimesFiltred((oldItens) => [...oldItens, elem])
      );
    });
    return setLoadingGeneric(false);
  };

  useEffect(() => {
    console.log(inputResults);
    filtredAnimes(title!);
    setSeachInput(title!);
  }, [title]);

  return (
    <>
      <Header key="header" />
      <DivInputPageConteiner key="DivInputPageConteiner">
        <DivConteinerAnimesInput key="DivConteinerAnimesInput">
          {
            <GenericSeach
              key="genericPage"
              list={animesFiltred}
              title="Seach Results"
              loading={loadingGeneric}
            />
          }
        </DivConteinerAnimesInput>
      </DivInputPageConteiner>
    </>
  );
};
