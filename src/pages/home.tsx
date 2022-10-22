import { Header } from "../components/header/header"
import React from "react"
import { SubHeader } from "../components/homeAnimes/subHeader/subMenu"
import { DivHomeConteiner } from "./styled"

export const HomePage = () => {

    return(
        <>
            <Header />
            <DivHomeConteiner>
                 <SubHeader/>
            </DivHomeConteiner>
        </>
    )
}