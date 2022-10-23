import { Route, Navigate, Routes } from "react-router-dom";
import { AnimeInfoPage } from "../pages/animeInfoPage/animeInfoPage";
import { HomePage } from "../pages/home/home";
import { InputSeachPage } from "../pages/inputSeach/inputSeach";

export const RoutesMap = () => {

    return(
        <Routes>
            <Route path={"/seach/:title"} element={<InputSeachPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/anime/info/:id" element={<AnimeInfoPage/>}/>
        </Routes>
    )
}