import styled from "styled-components";

export const DivGener = styled.div`
    ul {
      width: 100% !important;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      flex-wrap: wrap;
      max-width: 400px;
      color: rgba(255, 255, 255, 0.6);
      list-style-type: "▸";
      border-radius: 8px;

      li {
        width: 25%;

        &:hover{
            color: #0096c7;
            
            a{
            color: #0096c7;
            list-style-type: "▸ ";
            }
        }

        a {
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
        }
      }
    }
`;
