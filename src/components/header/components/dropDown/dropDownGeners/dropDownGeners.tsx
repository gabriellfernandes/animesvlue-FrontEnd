import { Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import { DivDropDown } from "../styled";

export const DropDownGeners = () => {
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
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <a style={{ cursor: "pointer" }}>Gênero</a>
      </Menu.Target>
      {
        <Menu.Dropdown
          style={{
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0.813)",
            borderRadius: "8px",
          }}
        >
          <DivDropDown>
            <ul>
              {geners.map((elem) => {
                return <li>
                    <Link to={`/anime/${elem}`}>{elem == "acao" ? "Ação" : elem.replace(/_/gi, " ")}</Link>
                  </li>;
              })}
            </ul>
          </DivDropDown>
        </Menu.Dropdown>
      }
    </Menu>
  );
};
