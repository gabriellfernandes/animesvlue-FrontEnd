import styled from "styled-components";


export const DivInputPageConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 120px;
`;

export const DivAnimeSeach = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  flex-wrap: wrap;
 

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
    font-size: 1.2rem;
  }
`;

export const DivConteinerAnimesInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: var(--backGroundColor);
  padding: 1rem;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-bottom: 80px;

  h2 {
    color: whitesmoke;
    font-size: 1.7rem;
  }

  span {
    color: whitesmoke;
    font-size: 4rem;
    margin-bottom: 30px;
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

