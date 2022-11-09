import styled from "styled-components";

export const EpConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 4rem;
`;

export const EpItem = styled.ul`
  width: 80%;
  max-height: 340px;
  overflow-y: auto;
  background-color: #242327;
  transition: all 0.6s;
  border: 1px solid rgba(52, 51, 60, 0.74);
  gap: 1rem;
  margin: 0 auto;

  &::-webkit-scrollbar-track {
    background-color: #242327;
  }

  &::-webkit-scrollbar {
    width: 8px;
  
    background: #f4f4f4;
  }

  &::-webkit-scrollbar-thumb {
    background: #dc2f02;
    border-radius: 8px;
  }

  li {
    background-color: #242327;
    border: 1px solid rgba(52, 51, 60, 0.74);
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 2rem;

    h4 {
      text-align: left;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    &:hover {
      background-color: var(--hoverColor);
    }
  }

  @media (max-width: 850px) {
    h4 {
      width: 100%;
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @media (max-width: 600px) {
    width: 95%;
  } ;
`;
