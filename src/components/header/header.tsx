import { DropDownAnime } from "./dropDown/dropDownAnime/dropDownAnime";
import { DropDownGeners } from "./dropDown/dropDownGeners/dropDownGeners";
import { HeaderMobile } from "./headerMobile/headerMobile";
import { HeaderConteiner, InputHeader, UlHeader } from "./styled";
import { BiSearchAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo3.png";

export const Header = () => {
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
          <div className="conteiner-input">
            <input type="text" placeholder="Pesquisar..." />
            <BiSearchAlt />
          </div>
          <span>|</span>
          <FaUser />
        </InputHeader>
      </HeaderConteiner>
    </>
  );
};
