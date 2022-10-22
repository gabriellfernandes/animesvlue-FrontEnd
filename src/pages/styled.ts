import styled from "styled-components";

export const DivHomeConteiner = styled.div`
    display: flex;
    justify-content: center;
`

export const SubHeaderUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 74%;
    box-shadow: 0px 2px 3px rgb(101 101 101 / 42%);

    li{
        height: 3rem;
        width: calc(100% / 24);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000000b2;
        color:  whitesmoke;

        &:hover{
            background-color: rgb(0, 181, 237);
        }
    };
`
