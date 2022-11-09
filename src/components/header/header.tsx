import { DropDownGeners } from "./components/dropDown/dropDownGeners/dropDownGeners";
import { HeaderMobile } from "./components/headerMobile/headerMobile";
import { HeaderConteiner, InputHeader, UlHeader } from "./styled";
import { BiSearchAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo3.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [seachInputHeader, setSeachInputHeader] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <HeaderMobile key="headerMobile" />
      <HeaderConteiner>
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <nav>
          <UlHeader>
            <li>
              <Link
                to={`/`}
              >
                Home
              </Link>
            </li>
            <li>
              <DropDownGeners />
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <Link
                to={`/anime/info/${
                  Math.floor(Math.random() * 200) + 400
                }`}
              >
                Explorar
              </Link>
            </li>
            <li>
              <a href="#">Historico</a>
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
