import styled from "styled-components";

export const EpConteiner = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 4rem;
  gap: 2rem;
`;

export const EpItem = styled.ul`
  width: 80%;
  max-height: 340px;
  overflow-y: auto;
  background-color: #242327;
  transition: all 0.6s;
  border: 1px solid rgba(52, 51, 60, 0.74);
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

export const DivInputEplist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 50px;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #242327;
  transition: all 0.6s;
  border: 1px solid rgba(52, 51, 60, 0.74);
  margin: 0 auto;

  button {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    width: 95%;
  }

  @media (max-width: 550px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    button {
      padding: 0.5rem;
      font-size: 0.7rem;
    }
  }

  gap: 1rem;
`;

export const InputEpList = styled.form`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 782px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    width: 35%;
  }

  .button-eplist {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    padding: 0;
    margin: 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  svg {
    font-size: 25px;
    color: white;
    cursor: pointer;

    &:hover {
      color: var(--hoverColor);
    }
  }

  input {
    width: 80%;
    background-color: rgba(0, 0, 0, 0);
    color: white;
  }

  .conteiner-input {
    width: 100%;
    border: 0.5px solid var(--shadowBox);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 35px;
  }

  svg {
    font-size: 25px;
    color: white;
    cursor: pointer;

    &:hover {
      color: var(--hoverColor);
    }
  }

  span {
    padding: 10px;
    font-weight: bold;
    font-size: 22px;
    cursor: default;
  }
`;
