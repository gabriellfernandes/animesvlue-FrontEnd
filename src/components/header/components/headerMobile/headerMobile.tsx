import { useEffect, useState } from "react";
import logo from "../../../../assets/logo3.png";
import { RemoveScroll } from "react-remove-scroll";
import { HeaderConteinerMobile, OpeMenu } from "./styled";
import { Divide as Hamburguer } from "hamburger-react";
import { InputModal } from "./inputModal";

export const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  useEffect(() => {
    let handleResize = () => {
      if(window.innerWidth >= 850){
        setOpen(false)
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeaderConteinerMobile>
        <InputModal setOpen={setOpen}/>
        <img src={logo} alt="Logo" className="logo" />
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
          </div>
        </OpeMenu>
      }
    </>
  );
};
