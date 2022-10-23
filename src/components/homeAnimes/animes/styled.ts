import styled from "styled-components";

export const DivConteinerAnimes = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: var(--backGroundColor);
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

  svg {
    color: black;
    background-color: whitesmoke;
    border: 1px solid whitesmoke;
    border-radius: 50%;
    outline: 1px solid whitesmoke;

    &:hover {
      color: white;
      background-color: var(--hoverColor);
      border: 1px solid var(--hoverColor);
      outline: 1px solid var(--hoverColor);
    }
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

`;
