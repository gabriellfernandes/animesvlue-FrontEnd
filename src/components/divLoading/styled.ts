import styled from "styled-components";

export const DivLoadingStyled = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    max-width: 580px;
    width: 80%;
  };

  p{
    font-size: 1.5rem;
    color: white;
  };

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;

    padding-top: 2rem;
  }
`;
