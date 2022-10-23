import styled from "styled-components";

export const CardAnimeItem = styled.div`
  height: 374px;
  width: 240px;
  cursor: pointer;

  img {
    width: 240px;
    height: 340px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  p {
    color: whitesmoke;
    width: 240px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    font-size: 1.2rem;
  }

  svg {
    display: block;
    position: absolute;
    width: 80px;
    height: auto;
    background-color: rgb(0, 181, 237);
    color: white;
    border: none;
    z-index: 3;
    bottom: 5px;
  }

  &:hover {
    p {
      color: var(--hoverColor);
    }

    &::after {
      content: url("https://www.wonderplugin.com/download/playbutton.png");
      z-index: 999;
      position: relative;
      bottom: 240px;
      left: 38%;
    }

    img {
      filter: brightness(50%);
    }

    svg {
      display: flex;
    }
  }
`;
