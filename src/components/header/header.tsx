import { DropDownAnime } from "./components/dropDown/dropDownAnime/dropDownAnime";
import { DropDownGeners } from "./components/dropDown/dropDownGeners/dropDownGeners";
import { HeaderMobile } from "./components/headerMobile/headerMobile";
import { HeaderConteiner, InputHeader, UlHeader } from "./styled";
import { BiSearchAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [seachInputHeader, setSeachInputHeader] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <HeaderMobile key="headerMobile" />
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
        <InputHeader
          onSubmit={(e) => {
            e.preventDefault();
            seachInputHeader !== "" && navigate(`/seach/${seachInputHeader}`);
          }}
          key="inputHeader"
        >
          <div className="conteiner-input">
            <input
              type="text"
              placeholder="Pesquisar..."
              onChange={(e) => setSeachInputHeader(e.target.value)}
            />
            <button type="submit">
              <BiSearchAlt />
            </button>
          </div>
          <span>|</span>
          <FaUser />
        </InputHeader>
      </HeaderConteiner>
    </>
  );
};
