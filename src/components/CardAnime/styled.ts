import styled from "styled-components";

export const CardAnimeItem = styled.div`
  height: 374px;
  width: 240px;
  margin-bottom: 20px;

  cursor: pointer;

  img {
    position: relative;
    width: 240px;
    height: 340px;
    border-radius: 10px;
  }

  p {
    margin-top: 10px;
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

  .playButton {
    display: inline-block;
    position: relative;
    max-width: 100%;
    
    img {
      max-width: 100%;
    }
  }

  &:hover {
    p {
      color: var(--hoverColor);
    }

    .playButton:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: url("https://www.wonderplugin.com/download/playbutton.png");
    }

    img {
      filter: brightness(50%);
    }

    svg {
      display: flex;
    }
  }
`;
