import styled from "styled-components";

export const DivConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 160px;
`;

export const EpConteiner = styled.div`
  display: flex;
  width: 85%;
  background-color: var(--backGroundColor);
  border: 1px solid black;

  h2 {
    color: whitesmoke;
    font-size: 1.7rem;
  }

  span {
    color: whitesmoke;
    font-size: 4rem;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 850px) {
    width: 95%;
  }
`;

export const DivConteinerPlayer = styled.div`
  display: flex;
  flex-direction: column;
  width: 81%;
  margin-right: 10px;

  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }

  .player {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;

    .player-wrapper {
      position: relative;
      padding-top: 56.25%;
    }

    .react-player {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  padding: 2rem;
  padding-top: 3rem;

  img {
    max-width: 60%;
    height: 60%;
    width: 340px;
    height: 440px;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-left: 4%;
    margin-right: 4%;
  }

  .divConteinerInfo {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .info {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      width: 100%;
      justify-content: flex-start;

      h2 {
        font-size: 1.8rem;
        margin-right: 1%;
        max-width: 80%;
      }

      h3 {
        font-size: 1.6rem;
        color: var(--colorSpan);
        text-decoration: 0.5px underline;
        width: 90%;
        span {
          font-size: 1.2rem;
          color: var(--colorSpan);
          text-decoration: none;
        }
      }

      span {
        font-size: 1.4rem;
        color: var(--colorSpan);
      }

      .divGeners {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.8rem;

        ul {
          display: flex;
          gap: 0.5rem;
          max-width: 80%;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          ul {
            justify-content: flex-start;
            width: 50%;
          }
        }
      }

      @media (max-width: 1200px) {
        h2 {
          font-size: 1.2rem;
        }

        h3 {
          font-size: 1.2rem;
          span {
            font-size: 1rem;
          }
        }

        span {
          font-size: 1rem;
        }
      }

      @media (max-width: 950px) {
        h2 {
          font-size: 1rem;
        }

        h3 {
          font-size: 1rem;
          span {
            font-size: 0.8rem;
          }
        }

        span {
          font-size: 0.8rem;
        }
      }

      @media (max-width: 600px) {
        h2 {
          font-size: 0.8rem;
        }

        h3 {
          font-size: 0.8rem;
          span {
            font-size: 0.6rem;
          }
        }

        span {
          font-size: 0.6rem;
        }
      }

      @media (max-width: 500px) {
        h2 {
          font-size: 1rem;
        }

        h3 {
          font-size: 1rem;
          span {
            font-size: 0.8rem;
          }
        }

        span {
          font-size: 0.8rem;
        }
      }
    }
  }

  @media (max-width: 1360px) {
    img {
      width: 280px;
      height: 380px;
    }
  }

  @media (max-width: 1050px) {
    img {
      width: 200px;
      height: 300px;
    }

    width: 100%;
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

export const DivSynope = styled.div`
  padding: 2rem;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;

  h2 {
    font-size: 1.6rem;
    margin-right: 1%;

    span {
      font-size: 1.2rem;
      color: var(--colorSpan);
    }
  }
`;

export const DivAlingTopAnime = styled.div`
  display: flex;
  padding-top: 2rem;
  text-align: center;
  flex-direction: column;
  text-align: center;
  width: 20%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 10px;
    text-align: center;
  }

  img {
    width: 280px;
    height: 340px;
  }

  @media (max-width: 1700px) {
    img {
      width: 200px;
      height: 300px;
    }

    p {
      text-align: center;
      width: 150px;
    }
  }

  @media (max-width: 1200px) {
    img {
      width: 160px;
      height: 260px;
    }
  }

  @media (max-width: 920px) {
    img {
      width: 140px;
      height: 240px;
    }
  }

  @media (max-width: 850px) {
    padding-top: 0rem;
    padding-left: 0rem;
    width: 0px;

    div {
      display: none;
    }

    h2 {
      display: none;
    }
  }
`;

export const DivEpisodio = styled.div`
  padding-top: 40px;
  width: 100%;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  text-align: center;

  img {
    width: 280px;
    height: 360px;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-bottom: 4%;
  }

  .animeEpConteiner {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 5%;
    gap: 2rem;

    h4 {
      max-width: 40%;
      color: white;
    }

    &:hover {
      h4 {
        color: var(--hoverColor);
      }
    }
  }

  @media (max-width: 850px) {
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .animeEpConteiner {
      display: block;
      gap: 0px;
      height: 374px;
      width: 240px;
      margin-bottom: 40px;

      img {
        margin-left: 0%;
        margin-right: 0%;
      }

      h4 {
        max-width: 100%;
        color: white;
      }
    }
  }
`;
