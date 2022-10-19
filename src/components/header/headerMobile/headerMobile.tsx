import { useState } from "react";
import logo from "../../../assets/logo3.png";
import { HeaderConteinerMobile, OpeMenu } from "./styled";
import {Divide as Hamburguer} from "hamburger-react"

export const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderConteinerMobile>
        <img src={logo} alt="Logo" className="logo" />
        <Hamburguer color="white" toggle={() =>setOpen(!open)} size={32} rounded toggled={open}/>
      </HeaderConteinerMobile>
      {
        <OpeMenu>
          <ul className={`ul_mobile-${open ? "open" : "close"}`}>
            <li>
              <a href="#">Animes</a>
            </li>
            <li>
              <a href="#">Calender</a>
            </li>
            <li>
              <a href="#">Geners</a>
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
          </ul>
        </OpeMenu>
      }
    </>
  );
};
