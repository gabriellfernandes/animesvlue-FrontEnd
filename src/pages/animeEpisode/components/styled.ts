import styled from "styled-components";

export const Controllers = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  padding: 0rem 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  bottom: -10%;

  button {
    background-color: rgb(19, 18, 25, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }
  .InputRange {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    margin-left: 1rem;
    margin-right: 1rem;

    span{
        font-weight: bold;
        font-size: 0.8rem;
        position: absolute;
        bottom: 35px;
        left: 8%;
    }

    input {
      background: #d3d3d3;
      outline: none;
      width: 100%;
      height: 6px;
      border-radius: 9px;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;

        background: #2796ee;
        cursor: pointer;
      }

      &::-moz-range-thumb {
        width: 115px;
        height: 115px;
        border-radius: 50%;

        background: #2796ee;
        cursor: pointer;
      }
    }
  }
  select {
    border: none;
    font-family: Verdana, Trebuchet, sans-serif;
    background-color: rgb(19, 18, 25, 0.5);
    color: #d3d3d3;
    padding: 2px;
    font-size: 1rem;
    border-radius: 4px;
    &:focus {
      border: none;
    }
    &::selection {
      border: none;
    }
    &:hover {
      background-color: var(--hoverColor);
    }
  }

  option {
    background-color: transparent;
    text-align: center;

    &:hover {
      background-color: var(--hoverColor);
    }
  }
`;
