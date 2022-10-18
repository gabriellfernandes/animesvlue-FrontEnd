import styled from "styled-components";

export const HeaderConteiner = styled.div`
  background-color: #000000b2;
  box-shadow: 0 1px 5px rgb(0 0 0 / 40%);
  color: rgba(255, 255, 255, 0.6);

  a:hover{
    color: #0096c7;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 320px;
  width: 100vw;

  .logo {
    width: 350px;
    height: 60px;
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
  gap: 3rem;
  text-align: center;
  a {
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;

  span{
    padding: 10px;
    font-weight: bold;
    font-size: 22px;
    cursor: default;
  }

  button {
    margin: 0px;
    padding: 0px;
    border: none;
    height: 28px;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const InputHeader = styled.div`
    display: flex;
    align-items: center;

  input {
    padding-left: 8px;
    height: 28px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: rgba(0, 0, 0, 0);
    border: 0.5px solid rgba(255, 255, 255, 0.6);
    border-right: 0px solid;
    color: white;
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
`;
