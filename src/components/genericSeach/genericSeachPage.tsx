import { GenericSeachInterface } from "../../interfaces/genericSeachInterface/genericSeachInterface";
import { CardAnime } from "../CardAnime/cardAnime";
import { DivLoading } from "../divLoading/divLoading";
import { DivSeachGeneric } from "./styled";

export const GenericSeach = ({
  list,
  loading,
  title,
}: GenericSeachInterface) => {
  return (
    <>
      {!loading ? (
        list.length != 0 ? (
          <>
            <h2 style={{ marginTop: "40px", textTransform: "capitalize" }}>
              {title == "acao" ? "Ação" : title!.replace(/_/gi, " ")}
            </h2>
            <span>-----</span>
            <DivSeachGeneric key="divAnimeSeach">
              {list.map((elem) => {
                return (
                  <CardAnime
                    image={`https://cdn.appanimeplus.tk/img/${elem.category_image}`}
                    title={
                      elem.title != undefined ? elem.title : elem.category_name!
                    }
                    animeId={elem.id != undefined ? elem.id : elem.category_id}
                    episodeId={elem.video_id != undefined ? elem.video_id : ""}
                  />
                );
              })}
            </DivSeachGeneric>
          </>
        ) : (
          <DivLoading image="https://i.pinimg.com/originals/52/49/2d/52492dfd578e53265da207e2903a5ce7.gif" />
        )
      ) : (
        <DivLoading />
      )}
    </>
  );
};
