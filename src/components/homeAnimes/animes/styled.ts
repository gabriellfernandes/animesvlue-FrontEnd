import styled from "styled-components";

export const DivConteinerAnimes = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #000000b2;
  padding: 1rem;

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

export const DivAnimeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;

  img {
    width: 240px;
    height: 340px;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  p {
    color: whitesmoke;
    width: 240px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
  }
`;
