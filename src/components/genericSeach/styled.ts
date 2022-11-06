import styled from "styled-components";

export const DivSeachGeneric = styled.div`
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