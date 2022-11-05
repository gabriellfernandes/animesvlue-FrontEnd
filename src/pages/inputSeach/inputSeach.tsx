import { Header } from "../../components/header/header";
import { AnimeContext } from "../../contexts/animesContext";
import { useContext, useEffect, useState } from "react";
import { CardAnime } from "../../components/CardAnime/cardAnime";
import { useParams } from "react-router-dom";
import {
  DivAnimeSeach,
  DivConteinerAnimesInput,
  DivInputPageConteiner,
} from "./styled";
import { InputResultsInterface } from "../../interfaces/animesContextInterface/animeContextInterface";
import { DivLoading } from "../../components/divLoading/divLoading";

export const InputSeachPage = () => {
  const { inputResults, loading, setSeachInput } = useContext(AnimeContext);
  const { title } = useParams();
  const [animesFiltred, setAnimesFiltred] = useState<InputResultsInterface[]>(
    [] as InputResultsInterface[]
  );

  const filtredAnimes = (seach: string) => {
    setAnimesFiltred([]);
    inputResults.map((elem) => {
      return (
        elem
          .category_name!.toLocaleLowerCase()
          .includes(seach!.toLocaleLowerCase()) &&
        setAnimesFiltred((oldItens) => [...oldItens, elem])
      );
    });
  };

  useEffect(() => {
    filtredAnimes(title!);
    setSeachInput(title!);
  }, [title]);

  return (
    <>
      <Header key="header" />
      <DivInputPageConteiner key="DivInputPageConteiner">
        <DivConteinerAnimesInput key="DivConteinerAnimesInput">
          {!loading ? (
            animesFiltred.length != 0 ? (
              <>
                <h2 style={{ marginTop: "40px" }}>Seach Results</h2>
                <span>-----</span>
                <DivAnimeSeach key="divAnimeSeach">
                  {animesFiltred.map((elem) => {
                    return (
                      <CardAnime
                        image={`https://cdn.appanimeplus.tk/img/${elem.category_image}`}
                        title={
                          elem.title != undefined
                            ? elem.title
                            : elem.category_name!
                        }
                        animeId={
                          elem.id != undefined ? elem.id : elem.category_id
                        }
                        episodeId={
                          elem.video_id != undefined ? elem.video_id : ""
                        }
                      />
                    );
                  })}
                </DivAnimeSeach>
              </>
            ) : (
              <DivLoading image="https://i.pinimg.com/originals/52/49/2d/52492dfd578e53265da207e2903a5ce7.gif" />
            )
          ) : (
            <></>
          )}

          <div></div>
        </DivConteinerAnimesInput>
      </DivInputPageConteiner>
    </>
  );
};
