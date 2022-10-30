import { Link } from "react-router-dom";
import { ConteinerMobile, Menu } from "./styled";

export const GenerPageMobile = () => {
  const geners = [
    "aventura",
    "acao",
    "comedia",
    "drama",
    "dublado",
    "ecchi",
    "escolar",
    "esporte",
    "fantasia",
    "filme",
    "harem",
    "historico",
    "jogo",
    "josei",
    "magia",
    "mecha",
    "militar",
    "misterio",
    "ova",
    "poderes",
    "psicologico",
    "romance",
    "samurai",
    "sci-fi",
    "seinen",
    "shoujo",
    "shounen",
    "slice_of_life",
    "sobrenatural",
    "suspense",
    "terror",
    "yaoi",
    "yuri",
  ];
  return (
    <ConteinerMobile>
      <Menu>
        <div className={`fundo`}>
          <ul className={`ul_mobile`}>
            <li>
              <Link to={"/"}>←</Link>
            </li>
            {geners.map((elem) => {
              return (
                <li>
                  <Link to={`/anime/${elem}`}>
                    {elem == "acao" ? "Ação" : elem.replace(/_/gi, " ")}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Menu>
    </ConteinerMobile>
  );
};
