import { Menu, Button } from "@mantine/core";
import { DivAnime } from "./styled";

export const DropDownAnime = () => {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <a style={{cursor: "pointer"}}>Animes</a>
      </Menu.Target>
      {
        <Menu.Dropdown style={{border: "none", backgroundColor: "rgba(0, 0, 0, 0.813)", borderRadius: "8px"}}>
          <DivAnime>
            <ul>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
              <li>
                <a href="#">Anime</a>
              </li>
            </ul>
          </DivAnime>
        </Menu.Dropdown>
      }
    </Menu>
  );
};
