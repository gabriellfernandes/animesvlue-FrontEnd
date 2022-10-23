import { Header } from "../../components/header/header";
import { AnimeContext} from "../../contexts/animesContext";
import { useContext, useEffect } from "react";
import { CardAnime } from "../../components/CardAnime/cardAnime";
import { useParams } from "react-router-dom";
import { DivAnimeSeach, DivConteinerAnimesInput, DivInputPageConteiner } from "./styled";

export const InputSeachPage = () => {
  const { inputResults, loading, setSeachInput } = useContext(AnimeContext);
  const { title } = useParams();
  
  useEffect(() => setSeachInput(title!), [title])

  return (
    <>
      <Header />
      <DivInputPageConteiner>
        <DivConteinerAnimesInput>
          {!loading ? (
            inputResults.length != 0 ? (
              <>
                <h2 style={{marginTop: "40px"}}>Seach Results</h2>
                <span>-----</span>
                <DivAnimeSeach>
                  {inputResults.map((elem) => {
                    return (
                      <CardAnime
                        image={elem.animeImg}
                        title={elem.animeTitle}
                        animeId={elem.animeId}
                        key={elem.animeTitle}
                      />
                    );
                  })}
                </DivAnimeSeach>
              </>
            ) : (
              <div>Not find animes</div>
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
