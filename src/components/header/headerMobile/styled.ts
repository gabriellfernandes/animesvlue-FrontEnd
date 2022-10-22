import styled from "styled-components";

export const HeaderConteinerMobile = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
  }

  background-color: #000000b2;
  box-shadow: 0 1px 5px rgb(0 0 0 / 40%);
  color: rgba(255, 255, 255, 0.6);
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  width: 100%;
  height: 6rem;

  .logo {
    width: 160px;
    height: 60px;
  }

  .menu_img {
    width: 50px;
    height: 50px;
  }

  svg{
    color: white;
    &:hover{
      color: rgb(0, 181, 237);
    }
  }

  button {
    margin: 0px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const OpeMenu = styled.div`
  .ul_mobile-open {
    display: none;

    @media (max-width: 850px) {
      display: flex;
    }

    position: absolute;
    z-index: 1000;
    width: 100vw;
    height: calc(100vh - 81px);
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #000000b2;
    transition: all 0.5s;

    li {
      width: 99%;
      text-align: center;
      border: 0.5px solid black;
      height: calc(100% / 6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      transition: all 0.5s;

      a {
        color: white;
      }

      &:hover {
        background-color: #000000b6;

        a {
          color: rgb(0, 181, 237);
        }
      }
    }
  }

  .ul_mobile-close {
    display: flex;
    position: absolute;
    z-index: -1;
    opacity: 0;
    width: 100vw;
    height: calc(100vh - 79px);
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #000000b2;
    transition: opacity 1s;
    transition-timing-function: step-end(opacity, end);

    a {
      color: rgba(255, 255, 255, 0.6);
      display: none;
    }
  }
`;
