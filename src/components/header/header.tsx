import { useState } from "react";
import logo from "../../assets/logo3.png";
import lupa from "../../assets/lupa.png";
import lupa2 from "../../assets/lupa2.png";
import userImg from "../../assets/usuario.png";
import userImg2 from "../../assets/usuario2.png";
import { DropDownAnime } from "../dropDownAnime/dropDownAnime";
import { DropDownGeners } from "../dropDownGeners/dropDownGeners";
import { HeaderMobile } from "./headerMobile/headerMobile";
import { HeaderConteiner, InputHeader, UlHeader } from "./styled";

export const Header = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverUser, setHoverUser] = useState<boolean>(false);

  return (
    <>
      <HeaderMobile />
      <HeaderConteiner>
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <UlHeader>
            <li>
              <DropDownAnime />
            </li>
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <DropDownGeners />
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Historic</a>
            </li>
          </UlHeader>
        </nav>
        <InputHeader>
          <input type="text" placeholder="Pesquisar..." />
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? (
              <img src={lupa2} alt="lupa" className="lupa" />
            ) : (
              <img src={lupa} alt="lupa" className="lupa" />
            )}
          </button>
          <span>|</span>
          <button
            onMouseEnter={() => setHoverUser(true)}
            onMouseLeave={() => setHoverUser(false)}
            className="user"
          >
            {hoverUser ? (
              <img src={userImg2} alt="lupa" className="lupa" />
            ) : (
              <img src={userImg} alt="lupa" className="lupa" />
            )}
          </button>
        </InputHeader>
      </HeaderConteiner>
    </>
  );
};
