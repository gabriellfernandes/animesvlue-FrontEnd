import styled from "styled-components";

export const ConteinerMobile = styled.div`
  background-color: var(--backGroundColor);
  box-shadow: 0 1px 5px rgb(0 0 0 / 40%);
  color: var(--colorDropDown);
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  width: 100vw;
`;

export const Menu = styled.div`
  .fundo {
    display: block;
    background-color: white;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999;
    transition: all 0.5s;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .ul_mobile {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #000000b3;
    transition: all 0.5s;

    li {
      width: 100%;
      text-align: center;
      border: 0.5px solid black;
      height: calc(100% / 12);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      transition: all 0.5s;

      a {
        color: var(--colorDropDown);
      }

      &:hover {
        background-color: #000000b6;

        a {
          color: var(--hoverColor);
        }
      }
    }
    overflow-y: scroll;
  }
`;
