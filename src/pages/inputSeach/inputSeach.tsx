import { Header } from "../../components/header/header";
import { useContext} from "react";
import { DivConteinerAnimesInput, DivInputPageConteiner } from "./styled";
import { GenericSeach } from "../../components/genericSeach/genericSeachPage";
import { SeachContext } from "../../contexts/animes/SeachContext";


export const InputSeachPage = () => {
  const { loadingFiltred, animesFiltred } =
    useContext(SeachContext);

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
              loading={loadingFiltred}
            />
          }
        </DivConteinerAnimesInput>
      </DivInputPageConteiner>
    </>
  );
};
