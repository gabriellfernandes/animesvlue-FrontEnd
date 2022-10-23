import styled from "styled-components";

export const DivConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 160px;
`;

export const InfoConteiner = styled.div`
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

export const DivConteinerInfoTopAling = styled.div`
  display: flex;
  flex-direction: column;
  width: 81%;
  margin-right: 10px;

  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
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
  border-bottom: 1px solid black;
  border-right: 1px solid black;
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
  padding-top: 2rem;
  text-align: center;
  flex-direction: column;
  text-align: center;
  padding-left: 0.5rem;

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

  @media (max-width: 1100px) {
    img {
      width: 180px;
      height: 280px;
    }
  }

  @media (max-width: 850px) {
    padding-top: 0rem;
    padding-left: 0rem;

    div {
      display: none;
    }

    h2 {
      display: none;
    }
  }
`;
