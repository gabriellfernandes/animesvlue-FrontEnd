import styled from "styled-components";

export const DivDropDown = styled.div`
  ul {
    width: 100% !important;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
    max-width: 400px;
    list-style-type: "▸";
    border-radius: 8px;

    li {
      width: 25%;
      list-style-type: "";
      &:hover {
        a {
          color: var(--hoverColor);
        }
      }

      a {
        color: whitesmoke;
        cursor: pointer;
      }
    }
  }
`;
