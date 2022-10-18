import styled from "styled-components";

export const DivAnime = styled.div`
    ul {
      width: 100% !important;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.813);
      gap: 1rem;
      flex-wrap: wrap;
      max-width: 300px;
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
