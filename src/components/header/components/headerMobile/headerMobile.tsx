import { useEffect, useState } from "react";
import logo from "../../../../assets/logo3.png";
import { RemoveScroll } from "react-remove-scroll";
import { HeaderConteinerMobile, OpeMenu } from "./styled";
import { Divide as Hamburguer } from "hamburger-react";
import { InputModal } from "./inputModal";
import { Link, useNavigate } from "react-router-dom";
import { DropDownGeners } from "../dropDown/dropDownGeners/dropDownGeners";

export const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    let handleResize = () => {
      if (window.innerWidth >= 850) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderConteinerMobile>
        <InputModal setOpen={setOpen} />
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
        <Hamburguer
          color="white"
          toggle={() => setOpen(!open)}
          size={32}
          rounded
          toggled={open}
        />
      </HeaderConteinerMobile>
      {
        <OpeMenu>
          {open == true && (
            <RemoveScroll>
              <></>
            </RemoveScroll>
          )}
          <div className={`fundo-${open ? "open" : "close"}`}>
            <ul className={`ul_mobile-${open ? "open" : "close"}`}>
              <li>
                <Link
                  to={`/anime/info/${Math.floor(Math.random() * 200 - 1) + 1}`}
                  onClick={() => setOpen(!open)}
                >
                  Anime
                </Link>
              </li>
              <li>
                <Link
                  to={`/anime/info/${
                    Math.floor(Math.random() * 400 - 200) + 200
                  }`}
                  onClick={() => setOpen(!open)}
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link to={"/geners"} onClick={() => setOpen(!open)}>
                  Geners
                </Link>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">Historic</a>
              </li>
            </ul>
          </div>
        </OpeMenu>
      }
    </>
  );
};
