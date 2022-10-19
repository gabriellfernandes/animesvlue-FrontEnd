import styled from "styled-components";

export const HeaderConteiner = styled.div`
  background-color: #000000b2;
  box-shadow: 0 1px 5px rgb(0 0 0 / 40%);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10%;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 10px 5%;
  }

  @media (max-width: 850px) {
    display: none;
  }

  a:hover {
    color: #0096c7;
  }

  .logo {
    width: 20%;
    height: 60px;
    margin-right: 40px;
  }

  .lupa {
    width: 20px;
    height: 20px;
  }

  .user {
    width: 20px;
    height: 20px;
  }
`;

export const UlHeader = styled.ul`
  margin-left: 0px;
  display: flex;
  gap: 1.7rem;
  text-align: center;

  a {
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 1600px) {
    gap: 1.5rem;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 1450px) {
    gap: 1rem;

    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }
`;

export const InputHeader = styled.div`
  display: flex;
  align-items: center;

  input {
    padding-left: 8px;
    width: 80%;
    height: 28px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: rgba(0, 0, 0, 0);
    border: 0.5px solid rgba(255, 255, 255, 0.6);
    border-right: 0px solid;
    color: white;
    margin-left: 10px;
  }

  button {
    margin: 0px;
    padding: 0px;
    padding-right: 10px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 28px;
    background-color: rgba(0, 0, 0, 0);
    border: 0.5px solid rgba(255, 255, 255, 0.6);
    border-left: 0px;
  }

  span {
    padding: 10px;
    font-weight: bold;
    font-size: 22px;
    cursor: default;
  }

  .user {
    margin: 0px;
    padding: 0px;
    border: none;
    height: 28px;
    background-color: rgba(0, 0, 0, 0);
  }

  @media (max-width: 1050px) {
    input {
      width: 60%;
      margin-left: 40px;
    }
  }

  @media (max-width: 910px) {
    input {
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    input {
      width: 40%;
    }
  }
`;
